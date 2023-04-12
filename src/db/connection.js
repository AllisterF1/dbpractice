const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect //(connectionstring)
  } catch (error) {
    console.log(error);
  }
};

connection();


