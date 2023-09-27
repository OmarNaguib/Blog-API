const asyncHandler = require("express-async-handler");
const Post = require("../../../models/Post");
const Comment = require("../../../models/Comment");

const deletePost = asyncHandler(async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.postId);
  const result = await Comment.deleteMany({ post: req.params.postId });
  console.log(result);
  res.sendStatus(200);
});

module.exports = deletePost;
