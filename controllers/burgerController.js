const express = require("express");

const router = express.Router();

//Import burger model
const burger = require("../models/burger");

// Create routes ----------------------------------------------------

// Route on page load - shows all burgers
router.get("/", function(req, res) {
  burger.list(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject)
  });
});

// Route for creating a new burger
router.post("/api/burger", function(req, res) {
  burger.create(req.body.name, function(results) {
    res.json({ id: result.insertId });
  });
});

// Route for eating a burger
router.put("/api/burger/:id", function(req, res) {
  console.log("updating id: " + req.params.id);
  burger.update(req.params.id, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end()
  });
});

//export routes for server.js
module.exports = router;