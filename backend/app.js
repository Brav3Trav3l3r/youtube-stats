const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const app = express();
app.use(morgan("dev"));
app.use(cors);
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to kanban server");
});

app.all("*", (req, res, next) => {
  throw new AppError("Route does not exists", 404);
});

app.use(globalErrorHandler);

module.exports = app;