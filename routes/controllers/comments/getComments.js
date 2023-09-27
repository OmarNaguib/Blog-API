const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const getComments = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({ post: req.params.postId }).exec();
  res.status(200);
  res.json({ comments });
});

module.exports = getComments;
