const crypto = require("crypto");

const createOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

module.exports = createOtp;
