const asyncHandler = require("express-async-handler");
const Post = require("../../../models/Post");

const getPosts = asyncHandler(async (req, res, next) => {
  try {
    const posts = await Post.find().exec();
    res.status(200);
    res.json({ posts });
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = getPosts;
