const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const updateComment = asyncHandler(async (req, res, next) => {
  const comment = new Comment({
    commentText: req.body.commentText,
    author: req.body.author,
    createdAt: new Date(),
    post: req.params.postId,
    _id: req.params.commentId,
  });
  await Comment.findByIdAndUpdate(req.params.commentId, comment);
  res.sendStatus(200);
});

module.exports = updateComment;
