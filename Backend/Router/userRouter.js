const express = require("express");
const userRouter = express.Router();
const isAuthentication = require("../Middleware/isAuthentication");
const { userCreate, userLogin, userProfile } = require("../Controller/userCtr");
userRouter.post("/api/v1/user/register", userCreate);
userRouter.post("/api/v1/user/login", userLogin);
userRouter.get("/api/v1/user/profile", isAuthentication, userProfile);

module.exports = userRouter;
