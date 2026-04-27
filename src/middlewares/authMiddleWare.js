const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Read the access token from the cookie set during login.
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    // Verify the token and attach the decoded user payload to the request.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
