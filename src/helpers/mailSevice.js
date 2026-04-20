const nodemailer = require("nodemailer");
const { otpTemplate } = require("./mailTemp");
require("dotenv").config();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.UserMail,
    pass: process.env.AppPass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailSevices = async ({ email, sub, otp }) => {
  try {
    await transporter.sendMail({
      from: `"Task Manager" <${process.env.UserMail}>`, // sender address
      to: email, // list of recipients
      subject: sub, // subject line
      html: otpTemplate(otp), // HTML body
    });
  } catch (error) {
    console.error("Mail send error:", error.message);
    throw error;
  }
};

module.exports = { mailSevices };
