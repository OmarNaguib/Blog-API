const asyncHandler = require("express-async-handler");
const Post = require("../../../models/Post");

const deletePost = asyncHandler(async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.postId);
  res.sendStatus(200);
});

module.exports = deletePost;
