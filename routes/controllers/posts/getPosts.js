const asyncHandler = require("express-async-handler");
const Post = require("../../../models/Post");

const getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find(req.query).exec();
  res.status(200);
  res.json({ posts });
});

module.exports = getPosts;
