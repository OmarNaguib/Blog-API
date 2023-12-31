const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const getComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId).exec();
  res.status(200);
  res.json({ comment });
});

module.exports = getComment;
