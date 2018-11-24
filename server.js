// dependecies
const express = require('express');
const path = require('path');

// configure express
const app = express();
const PORT = process.env.PORT || 3000;


// setting up express middleware settings
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// set routing

const router = require("./controllers/burgerController");

app.use(router);

// set up listener for primary port
app.listen(PORT, function() {
  console.log("Burgers now listening at port " + PORT);
});

