const Channel = require("../models/channelModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getChannelInfo = catchAsync(async (req, res) => {
  const { id } = req.params;

  const channel = await Channel.findById(id);

  if (!channel) {
    throw new AppError("Couldn't find channel", 404);
  }

  res.status(200).send({
    status: "success",
    data: channel,
  });
});

exports.addChannel = catchAsync(async (req, res) => {
  const { name, description, subscribers, uploads, views, earnings } = req.body;

  const channel = await Channel.create({
    name,
    description,
    subscribers,
    uploads,
    views,
    earnings,
  });

  res.status(200).json({
    data: channel,
  });
});

exports.deleteChannel = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new AppError("Please provide a channel id", 400);
  }

  const channel = await Channel.findOneAndDelete({
    _id: id,
  });

  if (!channel) {
    throw new AppError("Channel not found", 404);
  }

  res.status(204).json({
    status: "success",
  });
});

exports.updateChannel = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const updatedChannel = await Channel.findOneAndUpdate(
    { _id: id },
    {
      name,
      description,
    },
    { new: true, runValidators: true }
  );

  if (!updatedChannel) {
    throw new Error("Task not found", 404);
  }

  res.status(200).json({
    status: "success",
    data: updatedChannel,
  });
});
