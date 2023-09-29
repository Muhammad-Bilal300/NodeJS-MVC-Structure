const mongoose = require("mongoose");
const mongooseConnection = async () => {
  await mongoose.connect("mongodb://0.0.0.0:27017/company");
};
mongooseConnection();
const express = require("express");
const app = express();
const employeeRoute = require('./routes/employeeRoute')

app.use('/',employeeRoute)

app.listen(5000, () => {
  console.log("Server is started");
});
