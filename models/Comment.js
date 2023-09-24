const { model, Schema } = require("mongoose");
// TODO: Add date formatting: luxon

const commentSchema = new Schema({
  commentText: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, required: true },
  post: { type: Schema.Types.ObjectId, ref: "Comment", required: true },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
