const user = require("../models/authSchema");
const { validateEmail } = require("../helpers/credintialValidate");
const registration = async (req, res) => {
  const { avatar, fullName, username, email, password } = req.body;
  const name = fullName || username;

  try {
    if (!avatar || !name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Validation of email

    if (!validateEmail(email))
      return res.status(400).json({ message: "Invalid email format" });

    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }

    const newUser = new user({
      avatar,
      fullName: name,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "User created!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const login = async (req, res) => {
  const { email, pass } = req.body;
  try {
  } catch (error) {}
};

module.exports = { registration, login };
