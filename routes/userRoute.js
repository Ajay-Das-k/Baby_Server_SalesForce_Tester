const express = require("express");
const userRoute = express();
const path = require("path");
const userController = require("../controller/userController");

userRoute.use(express.json());
userRoute.use(express.urlencoded({ extended: true }));

userRoute.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../view", "index.html"));
});
userRoute.get("/callBack", (req, res) => {
  res.sendFile(path.join(__dirname, "../view", "callback.html"));
});

module.exports = userRoute;