const asyncHandler = require("express-async-handler");
const Comment = require("../../../models/Comment");

const rename = asyncHandler(async (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = rename;
