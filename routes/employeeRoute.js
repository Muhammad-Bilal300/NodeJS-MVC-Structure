const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const employeeController = require("../controllers/employeeController");

const employeeRoute = express();
employeeRoute.set("views", path.join(__dirname, "../views"));
employeeRoute.set("view engine", "pug");
employeeRoute.use(bodyParser.json());
employeeRoute.use(bodyParser.urlencoded({ extended: true }));

employeeRoute.get("/register", (req, res) => {
  res.render("register");
});
employeeRoute.post("/register", employeeController.insertEmployee);

module.exports = employeeRoute;
