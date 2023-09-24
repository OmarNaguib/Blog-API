const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const getComment = asyncHandler(async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId).exec();
    res.status(200);
    res.json({ comment });
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = getComment;
