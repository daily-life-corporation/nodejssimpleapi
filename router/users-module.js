var express = require('express')
var usersrouter = express.Router();
var bodyParser = require("body-parser")
usersrouter.use(bodyParser.json({
    extended: true
}))
const config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: '192.168.10.40',
    database: 'users',
    pool: {
        max: 0,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}

// const request = new sql.Request()
usersrouter.route('/getusers')
    .post(function (req, res) {
    });

module.exports = usersrouter;