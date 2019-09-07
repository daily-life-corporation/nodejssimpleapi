var express = require("express")
var bodyParser = require("body-parser")

var usersrouter = require("./router/users-module")
var app = express()
var cors = require('cors');

const hostname = '127.0.0.1';
const port = 0000;
app.use(bodyParser.json({
    extended: true
}))
app.use(cors());
app.options('*', cors());

app.post("/", function (req, res) {
    res.se("");
})
// one url multi medthod
app.use("/api", [usersrouter])
app.use(function (req, res, error) {
    res.end("Page not found");
})
var server = app.listen(port, function () {
    console.log("Server running@ " + hostname + ":" + port);
})