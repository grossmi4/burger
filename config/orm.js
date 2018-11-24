//import database connection
const connection = require("./connection.js");

const orm = {
  // function to create a burger from burger name, takes callback
  newBurger: function(burgerName, cb) {
    const queryString =
        `INSERT INTO burgers (burger_name) VALUES (${burgerName})`;
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      cb(results)
    })
  },

  // function to update burger to devoured, takes callback
  eatBurger: function(burgerId, cb) {
    const queryString =
        `UPDATE burgers
        SET (isDevoured = TRUE)
        WHERE id = ${burgerId}`;
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      cb(results)
    })
  },

  // function to return all burgers, takes callback
  listBurger: function(cb) {
    const queryString = `SELECT * FROM burgers`;
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      cb(results)
    })
  }
};

// Export orm
module.exports = orm;