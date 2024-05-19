const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../Model/usermodel");
const userCreate = async (req, res) => {
  const { username, email, password } = req.body;
  const existuser = await User.findOne({ username });
  //   console.log(existuser);
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
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const existemail = await User.findOne({ email });
  if (!existemail) {
    return res.json({ message: "Invalid password or email" });
  }
  const isMatch = await bcrypt.compare(password, existemail.password);
  if (!isMatch) {
    return res.json({ message: "Invalid password or email" });
  }
  res.json({
    message: "Login successful",
    // id: existemail.id,
    // name: existemail.username,
    // email: existemail.email,
    existemail,
  });
};
module.exports = { userCreate, userLogin };
