const user = require("../models/authSchema");
const { validateEmail } = require("../helpers/credintialValidate");
const createOtp = require("../helpers/otpUtils");
const { mailSevices } = require("../helpers/mailSevice");
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

    // otp generation

    const otpValue = createOtp();

    //  otp expiry time

    const expireAfter = new Date(Date.now() + 10 * 60 * 1000);

    const newUser = new user({
      avatar,
      fullName: name,
      email,
      password,
      otp: otpValue,
      otpExpire: expireAfter,
    });

    await newUser.save();

    await mailSevices({ email, sub: "Your Verification Code", otp: otpValue });
    res.status(201).json({ message: "User created!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
// otp verify
const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const existingPerson = await user.findOne({ email });
    if (!existingPerson)
      return res.status(404).json({ error: "User not found!" });

    if (existingPerson.isVerified)
      return res.status(400).json({ message: "OTP Already Verified" });

    const Person = await user.findOneAndUpdate(
      {
        email,
        otp,
        otpExpire: { $gt: Date.now() },
      },
      { isVerified: true, otp: null },
      { returnDocument: "after" },
    );

    if (!Person) return res.status(400).json({ message: "Invalid OTP" });
    res.status(200).json({ message: "Verification successful!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Login
const login = async (req, res) => {
  const { email, pass } = req.body;
  try {
  } catch (error) {}
};

module.exports = { registration, login, verifyOtp };
