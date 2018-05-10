// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbburger) {
      
      res.render("index", {burgers: dbburger});
    });
  });

  // Get route for returning burgers of a specific category
  app.get("/api/burgers/category/:category", function(req, res) {
    db.Burger.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbburger) {
      res.json(dbburger);
    });
  });

  // Get rotue for retrieving a single burger
  app.get("/api/burgers/:id", function(req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbburger) {
      res.json(dbburger);
    });
  });

  // POST route for saving a new burger
  app.post("/burgers/create", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.b_name
    })
    .then(function(dbburger) {
      res.json(dbburger);
      res.redirect("/burgers");
    });
  });

  // DELETE route for deleting burgers
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbburger) {
      res.json(dbburger);
    });
  });

  // PUT route for updating burgers
  app.put("/api/burgers", function(req, res) {
    db.Burger.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbburger) {
      res.json(dbburger);
    });
  });
};
