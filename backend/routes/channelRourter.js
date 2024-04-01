const express = require("express");
const {
  getChannelInfo,
  addChannel,
} = require("../controllers/channelController");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to user router");
});

router.get("/:id", getChannelInfo);
router.post("/", addChannel);

module.exports = router;
