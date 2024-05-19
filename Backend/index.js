const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./Router/userRouter");
const app = express();
app.use(express.json());
app.use(cors());
const mongodb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://msanthanalakshmi1324:Sf9Z0IoGcE20FqiO@jeeva.3pxymoe.mongodb.net/?retryWrites=true&w=majority&appName=Jeeva"
    )
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.error(error);
    });
};
mongodb();
app.use("/", userRouter);
const port = 1324;
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
