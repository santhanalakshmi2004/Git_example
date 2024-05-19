const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../Model/usermodel");
const userCreate = async (req, res) => {
  const { username, email, password } = req.body;
  const existuser = await User.findOne({ username });
  if (existuser) {
    return res.json({ message: "user already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });
  await newUser.save();
  res.json({ message: "registered successfully", newUser });
};
module.exports = { userCreate };
