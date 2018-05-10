// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
ar path = require("path");
var db = require("../models")
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbburger){
      //var hbsObject = {burgers: data};
      var hbsObject = {burgers: dbburger};
      console.log(hbsObject);
    res.redirect("/burgers");
    })
    //res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
  });

  //app.get("/burgers", function(req, res) {
    //res.render("index", {burgers: dbburger}); 
    //res.sendFile(path.join(__dirname, "../public/cms.html"));
  //});

  // blog route loads blog.html
  app.get("/burgers", function(req, res) {
   
  //MySQL query callback will return burger_data
  res.render("index", hbsObject);
    //res.sendFile(path.join(__dirname, "../public/burgers.html"));
  });

};
