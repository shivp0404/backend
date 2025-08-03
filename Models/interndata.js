const mongoose = require("mongoose");

const interSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: [true, "Gender is required"],
  },
  age: {
    type: Number,
    require: [true, "age is required"],
  },
  degree: {
    type: String,
    require: [true, "degress is required"],
  },
  graduationyear: {
    type: Number,
    min: [2000, "Year too old"],
    max: [new Date().getFullYear(), "Year can't be in the future"],
    require: [true, "graduation year is required"],
  },
    contact: {
    type: String,
    required: [true, "Contact number is required"],
    match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"]
  }
});

module.exports = mongoose.model("Intern", interSchema);
