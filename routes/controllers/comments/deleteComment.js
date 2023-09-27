const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const deleteComment = asyncHandler(async (req, res, next) => {
  const result = await Comment.findByIdAndDelete(req.params.commentId);
  // Todo: return different result if result is null (comment not found)
  res.sendStatus(200);
});

module.exports = deleteComment;
