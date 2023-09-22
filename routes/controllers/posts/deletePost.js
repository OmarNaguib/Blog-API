const asyncHandler = require("express-async-handler");
const Post = require("../../../models/Post");

const deletePost = asyncHandler(async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = deletePost;
