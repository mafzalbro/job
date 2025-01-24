const express = require("express");
const { config } = require("dotenv");
const api = require("./src/routes/api");
const bodyParser = require("body-parser");
config();
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Use middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api", api);

// Root route
app.get("/", (req, res) => {
    res.send("SAP API goes with /api");
});

// Middleware: Error Handler
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
};

// Use error handler middleware (should be the last middleware)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
