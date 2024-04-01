const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const channelRotuer = require("./routes/channelRourter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Welcome to youtube stats server");
});

app.use("/channels", channelRotuer);

app.all("*", (req, res, next) => {
  throw new AppError("Route does not exists", 404);
});

app.use(globalErrorHandler);

module.exports = app;
