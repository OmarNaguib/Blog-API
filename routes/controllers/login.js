const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res, next) => {
  if (req.body.password === process.env.PASSWORD)
    jwt.sign(
      { user: "admin" },
      process.env.SECRET_KEY,
      { expiresIn: "30s" },
      (err, token) => {
        res.json({ token, expirationTime: "30s" });
      }
    );
  else res.sendStatus(401);
};
module.exports = login;
