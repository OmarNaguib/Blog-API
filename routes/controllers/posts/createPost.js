const asyncHandler = require("express-async-handler");
const Post = require("../../../models/Post");

const createPost = asyncHandler(async (req, res, next) => {
  // Todo: get user from jwt
  const post = new Post({
    title: req.body.title,
    postText: req.body.postText,
    author: "me",
    createdAt: new Date(),
    isPublished: req.body.isPublished,
  });
  try {
    const result = await post.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = createPost;
