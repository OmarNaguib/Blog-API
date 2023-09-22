const asyncHandler = require("async-handler");

const rename = asyncHandler(async (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = rename;
