//Require Node Modules
const validator = require("validator")
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    index: {unique: true},
    trim: true,
    minlength: 6,
    maxlength: 12,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid")
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    validate(value) {
      if(value.toLowerCase().includes("password") || value.includes("123456"))
        throw new Error("Password is invalid.")
    }
  }
})
const User = mongoose.model("User", userSchema)

module.exports = User