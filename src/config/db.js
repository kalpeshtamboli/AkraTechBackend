const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONN, {
      useUnifiedTopology: true,

      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
