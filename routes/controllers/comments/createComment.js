const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const createComment = asyncHandler(async (req, res, next) => {
  const comment = new Comment({
    commentText: req.body.commentText,
    author: req.body.author,
    createdAt: new Date(),
    post: req.params.postId,
  });
  try {
    const result = await comment.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = createComment;
