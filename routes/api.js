const express = require("express");
const cors = require("cors");

const router = express.Router();

router.use(cors());

const createPost = require("./controllers/posts/createPost");
const deletePost = require("./controllers/posts/deletePost");
const updatePost = require("./controllers/posts/updatePost");
const getPost = require("./controllers/posts/getPost");
const getPosts = require("./controllers/posts/getPosts");

const createComment = require("./controllers/comments/createComment");
const deleteComment = require("./controllers/comments/deleteComment");
const updateComment = require("./controllers/comments/updateComment");
const getComment = require("./controllers/comments/getComment");
const getComments = require("./controllers/comments/getComments");

const login = require("./controllers/login");
/* GET home page. */
// router.get("/", (req, res, next) => {
//   res.render("index", { title: "Express" });
// });

router.get("/posts/", getPosts);
router.get("/posts/:postId", getPost);
router.post("/posts/", createPost);
router.put("/posts/:postId", updatePost);
router.delete("/posts/:postId", deletePost);

router.get("/posts/:postId/comments", getComments);
router.get("/posts/:postId/comments/:commentId", getComment);
router.post("/posts/:postId/comments", createComment);
router.put("/posts/:postId/comments/:commentId", updateComment);
router.delete("/posts/:postId/comments/:commentId", deleteComment);

router.get("/login", login);

module.exports = router;
