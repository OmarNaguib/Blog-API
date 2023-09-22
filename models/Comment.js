const { model, Schema } = require("mongoose");
// TODO: Add date formatting: luxon

const postSchema = new Schema({
  commentText: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

const Post = model("Post", postSchema);

module.exports = Post;
