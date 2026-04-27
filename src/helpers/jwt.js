const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
};

module.exports = { generateAccessToken };
