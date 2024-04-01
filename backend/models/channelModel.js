const { default: mongoose } = require("mongoose");

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  subscribers: {
    value: Number,
    trend: {
      type: String,
      enum: ["up", "down"],
    },
    change: Number,
  },
  uploads: {
    value: Number,
  },
  views: {
    value: Number,
    trend: {
      type: String,
      enum: ["up", "down"],
    },
    change: Number,
  },
  earnings: {
    value: String,
    trend: {
      type: String,
      enum: ["up", "down"],
    },
    change: Number,
  },
});

const Channel = mongoose.model("Channel", channelSchema);
module.exports = Channel;
