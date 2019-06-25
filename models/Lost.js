//Require Node Modules
const validator = require("validator")
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const lostSchema = new Schema({
  lostCity: {
    type: String,
    required: true,
    trim: true
  },
  lostPostal: {
    type: String,
    validate(value) {
      if(!validator.isPostalCode(value, "CA")) {
        throw new Error("Postal code is invalid")
      }
    }
  },
  lostPhysicalLocation: {
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
  date: {
    type: Date,
    default: Date.now
  }
})

lostSchema.set("timestamps", true)

const Lost = mongoose.model("Lost", lostSchema)

module.exports = Lost