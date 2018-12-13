// Import mysql
const mysql = require('mysql');

// Create connection to database
const connection = mysql.createConnection({
  host: "localhost", 
  user: "student",
  port: 3000,  
  password: "student", 
  database: "multicheckout"
});

connection.connect();

module.exports = connection;