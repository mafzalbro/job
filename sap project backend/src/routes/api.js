const {deleteEndpoint, getEndpoint, postEndpoint, putEndpoint} = require("../controllers/api")

const router = require("express").Router()

router.get("/get", getEndpoint)
router.post("/post", postEndpoint)
router.put("/put/:id", putEndpoint)
router.delete("/delete/:id", deleteEndpoint)

module.exports = router