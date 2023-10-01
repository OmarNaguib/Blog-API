const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

require("dotenv").config();

const login = asyncHandler((req, res, next) => {
  if (req.body.password === process.env.PASSWORD)
    jwt.sign(
      { user: "admin" },
      process.env.SECRET_KEY,
      // { expiresIn: 30 },
      (err, token) => {
        res.json({ token, expirationTime: 30 });
      }
    );
  else res.sendStatus(401);
});

const getToken = asyncHandler((req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader === undefined) res.sendStatus(403);
  const token = bearerHeader.split(" ")[1];
  req.token = token;
  next();
});

const verifyToken = asyncHandler((req, res, next) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
    if (err) res.sendStatus(403);
    else {
      next();
    }
  });
});
module.exports = { login, getToken, verifyToken };
