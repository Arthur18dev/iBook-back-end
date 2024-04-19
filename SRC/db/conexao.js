const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'arthur.ti18',
  database: 'ibook',
});
connection.connect(function(error) {
    if (error)
    console.log("Error: ", error)
    else
    console.log("Conectou meu parça")
})

module.exports = connection



