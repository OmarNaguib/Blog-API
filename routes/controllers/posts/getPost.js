const asyncHandler = require("express-async-handler");
const Post = require("../../../models/Post");

const getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId).exec();
  res.status(200);
  res.json({ post });
});

module.exports = getPost;
