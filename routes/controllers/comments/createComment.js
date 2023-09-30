const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const createComment = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const comment = new Comment({
    commentText: req.body.commentText,
    author: req.body.author,
    createdAt: new Date(),
    post: req.params.postId,
  });
  const result = await comment.save();
  res.sendStatus(200);
});

module.exports = createComment;
