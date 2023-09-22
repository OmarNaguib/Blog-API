const express = require("express");

const router = express.Router();

const createPost = require("./controllers/posts/createPost");
const deletePost = require("./controllers/posts/deletePost");
const updatePost = require("./controllers/posts/updatePost");
const getPost = require("./controllers/posts/getPost");
const getPosts = require("./controllers/posts/getPosts");

const createComment = require("./controllers/comments/createComment");
const deleteComment = require("./controllers/comments/createComment");
const updateComment = require("./controllers/comments/updateComment");
const getComment = require("./controllers/comments/getComment");
const getComments = require("./controllers/comments/getComments");

/* GET home page. */
// router.get("/", (req, res, next) => {
//   res.render("index", { title: "Express" });
// });

router.get("/", getPosts);
router.get("/:postId", getPost);
router.post("/", createPost);
router.put("/:postId", updatePost);
router.delete("/:postId", deletePost);

router.get("/:postId/comments", getComments);
router.get("/:postId/comments/:commentId", getComment);
router.post("/:postId/comments", createComment);
router.put("/:postId/comments/:commentId", updateComment);
router.delete("/:postId/comments/:commentId", deleteComment);

module.exports = router;
