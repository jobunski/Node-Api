import consign from "consign";
import express from "express";
// const consign = require("consign");
// const app = require("express");

const app = express();  

consign({verbose: false})
  .include("libs/config.js")
  .then("db.js")
  .then("auth.js")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);

module.exports = app;
