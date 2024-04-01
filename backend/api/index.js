require("dotenv-flow").config();
const mongoose = require("mongoose");
const app = require("../app");

console.log(process.env.NODE_ENV);
console.log(process.env.MONGODB_URI);
console.log(process.env.PORT);

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception 💥");
  console.log(err);
  process.exit(1);
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("✅ Connected to database");
});

const server = app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection 💥");
  console.log(err);

  server.close(() => process.exit(1));
});
