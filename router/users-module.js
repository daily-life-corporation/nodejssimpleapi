var express = require("express");
var usersrouter = express.Router();
var bodyParser = require("body-parser");
var mysql = require("mysql");

usersrouter.use(
  bodyParser.json({
    extended: true
  })
);
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root123456",
  database: "react"
});

// const request = new sql.Request()
usersrouter.route("/").get(function(req, res) {
  res.json("hello5555");
});
usersrouter.route("/getusers").get(function(req, res) {
    connection.connect(function(err) {
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
    
        console.log('Connected as id ' + connection.threadId);
    });
    var query=`SELECT * FROM user`
    connection.query(query, function (error, results, fields) {
        if (error)
            throw error;
        results.forEach(result => {
            console.log(result);
        });
        res.status(200).json(results)
    });
    
    connection.end();
});

module.exports = usersrouter;
