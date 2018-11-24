//import database connection
const connection = require("./connection.js");

const orm = {
  // function to create a burger from burger name, takes callback
  insertOne: function(table, field, value, cb) {
    const queryString =
        `INSERT INTO ${table} (${field}) VALUES (${value})`;
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      cb(results)
    })
  },

  // function to update burger to devoured, takes callback
  updateOne: function(table, field, value, where, cb) {
    const queryString =
        `UPDATE ${table}
        SET (${field} = ${value})
        WHERE id = ${where}`;
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      cb(results)
    })
  },

  // function to return all burgers, takes callback
  selectAll: function(table, cb) {
    const queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      cb(results)
    })
  }
};

// Export orm
module.exports = orm;