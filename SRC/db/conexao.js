const mysql = require('mysql2/promise');

// Create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'arthur.ti18',
  database: 'ibook',
});


module.exports = connection



