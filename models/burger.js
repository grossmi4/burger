// import ORM

const orm = require("../config/orm.js");

const burger = {
  // totally redundant function due to limited/lazy ORM
  list: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  // logic would go here specific to burgers except there's one table and the orm is built specifically for that
  create: function(newBurger, cb) {
    orm.insertOne('burgers','burger_name', newBurger, function(res) {
      cb(res)
    });
  },
  // last method of redundant model/orm for #VCM
  update: function(burgerId, cb) {
    orm.updateOne('burgers','devoured','true', burgerId, function(res) {
      cb(res)
    });
  },
};

//export the model for the controller
module.exports = burger;
