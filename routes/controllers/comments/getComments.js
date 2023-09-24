const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const getComments = asyncHandler(async (req, res, next) => {
  try {
    const comments = await Comment.find().exec();
    res.status(200);
    res.json({ comments });
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = getComments;
