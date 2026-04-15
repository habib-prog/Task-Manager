const mongoose = require("mongoose");

const dbConfig = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE);
    console.log(`MongDB Connected to : ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConfig;
