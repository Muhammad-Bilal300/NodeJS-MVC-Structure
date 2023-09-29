const Employee = require("../models/employeeModel");
const express = require("express");
const mongoose = require("mongoose");

const insertEmployee = async (req, res) => {
  try {
    const insertedEmployee = new Employee(req.body);
    let result = await insertedEmployee.save();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
module.exports = {
  insertEmployee
};
