const asyncHandler = require("async-handler");

const createPost = asyncHandler(async (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = createPost;
