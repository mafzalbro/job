const getEndpoint = (req, res) => {
    console.log("getEndpoint");

    try {
        res.status(200).json({
            status: 200,
            message: "OK",
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        })
    }
}

const postEndpoint = (req, res) => {
    const body = req.body

    console.log(body);

    try {
        res.status(200).json({
            status: 200,
            message: "OK",
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        })
    }
}

const putEndpoint = (req, res) => {
    const id = req.params.id
    const body = req.body
    console.log(body, id);

    try {
        res.status(200).json({
            status: 200,
            message: "OK",
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        })
    }
}

const deleteEndpoint = (req, res) => {
    const id = req.params.id

    console.log(id);

    try {
        res.status(200).json({
            status: 200,
            message: "OK",
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        })
    }
}

module.exports = {
    getEndpoint,
    postEndpoint,
    putEndpoint,
    deleteEndpoint
}