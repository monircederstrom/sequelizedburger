var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

//var mysql = require("mysql");


var app = express();
//var path = require("path");
// Set the port of our application
var PORT = process.env.PORT || 7000;
var db = require(".models");
// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(methodOverride('_method'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//app.use(methodOverride('_method'));
require("./routes/api-routes.js")(app);
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//
db.sequelize.sync({ force: true}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });