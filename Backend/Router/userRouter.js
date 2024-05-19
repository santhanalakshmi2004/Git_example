const express = require("express");
const userRouter = express.Router();
const { userCreate, userLogin } = require("../Controller/userCtr");
userRouter.post("/api/v1/user/register", userCreate);
userRouter.post("/api/v1/user/login", userLogin);
userRouter.get("/api/v1/user/profile");

module.exports = userRouter;
