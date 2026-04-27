const express = require("express");
const router = require("./src/routes/index");
const dotenv = require("dotenv");
const dbConfig = require("./src/config/db");
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(router);
const Port = process.env.Port || 8000;
const startApp = async () => {
  try {
    await dbConfig();
    app.listen(Port, () => {
      console.log(`🌐 Server running on Port ${Port}`);
    });
  } catch (err) {
    console.error("App failed to start:", err.message);
  }
};

startApp();
