const asyncHandler = require("express-async-handler");
const Post = require("../../../models/Post");

const updatePost = asyncHandler(async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    postText: req.body.postText,
    author: "me",
    createdAt: new Date(),
    isPublished: req.body.isPublished,
    _id: req.params.postId,
  });
  try {
    await Post.findByIdAndUpdate(req.params.postId, post);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = updatePost;
