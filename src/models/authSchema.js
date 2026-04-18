const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  avatr: {
    type: String,
    required: true,
  },
  fullName: {
    type: string,
    require: true,
  },
  email: {
    type: string,
    required: true,
  },
  password: {
    type: string,
    required: true,
  },
});

module.exports = mongoose.model("user", authSchema);
