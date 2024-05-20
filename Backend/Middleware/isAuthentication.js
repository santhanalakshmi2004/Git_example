const express = require("express");
const jwt = require("jsonwebtoken");
const isAuthentication = async (req, res, next) => {
  const headerObject = req.headers.authorization;
  if (!headerObject) {
    res.json({ messege: "Unathorized" });
  }
  const token = headerObject.split(" ")[1];
  jwt.verify(token, "san", (error, decorder) => {
    if (error) {
      res.json({ messege: "Unauthorized" });
    } else {
      req.user = decorder.id;
      next();
    }
  });
};
module.exports = isAuthentication;
