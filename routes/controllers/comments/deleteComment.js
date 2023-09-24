const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const deleteComment = asyncHandler(async (req, res, next) => {
  try {
    const result = await Comment.findByIdAndDelete(req.params.commentId);
    console.log("here", result);
    // todo return different result if result is null (comment not found)
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = deleteComment;
