const express = require("express");
const path = require("path");
const app = express();

const staticPath = path.join(__dirname, "static")
app.arguments(express.static(staticPath))

app.arguments((req, res) => {
    res.status(400)
    res.send("404 Not Found")
})

app.listen(300, () => {
    console.log("Server is running at port 3000");
})