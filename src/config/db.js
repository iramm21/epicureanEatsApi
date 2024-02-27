const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database
    const conn = await mongoose.connect(process.env.DATABASE_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
