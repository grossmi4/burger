const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'burgerdb'
});

connection.connect(function(err) {
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connected as id" + connection.threadId);
});

//export connection
module.exports = connection;