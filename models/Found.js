//Require Node Modules
const validator = require("validator")
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const foundSchema = new Schema({
  foundCity: {
    type: String,
    required: true,
    trim: true
  },
  foundPostal: {
    type: String,
    validate(value) {
      if(!validator.isPostalCode(value, "CA")) {
        throw new Error("Postal code is invalid")
      }
    }
  },
  foundPhysicalLocation: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

foundSchema.set("timestamps", true)

const Found = mongoose.model("Found", foundSchema)

module.exports = Found