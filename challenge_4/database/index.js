const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'student', 
  password: 'student', 
  database: 'connect5'
});



connection.connect(); 

module.exports = connection; 

