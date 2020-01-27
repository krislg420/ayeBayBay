require("dotenv").config();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "great_bay_db",
    password: process.env.DB_PASSWORD
})
connection.connect(function (err) {
    console.log(connection.threadId);
})