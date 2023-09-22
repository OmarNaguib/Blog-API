const { model, Schema } = require("mongoose");
// TODO: Add date formatting: luxon

const postSchema = new Schema({
  title: { type: String, required: true },
  postText: { type: String, required: true },
  // author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  author: { type: String, required: true },
  createdAt: { type: Date, required: true },
  isPublished: { type: Boolean, required: true },
});

const Post = model("Post", postSchema);

module.exports = Post;
