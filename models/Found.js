//Require Node Modules
const validator = require("validator")
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const foundSchema = new Schema({
  foundLocation:{
    type:String,
    required: true,
    trim: true
  },
  foundColor:{
    type:String,
    required: true,
    trim: true
  },
  foundPhoneNumber:{
    type:Number,
    required: true,
    trim: true
  },
  // foundCity: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // foundPostal: {
  //   type: String,
  //   validate(value) {
  //     if(!validator.isPostalCode(value, "CA")) {
  //       throw new Error("Postal code is invalid")
  //     }
  //   }
  // },
  // foundPhysicalLocation: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  foundTitle: {
    type: String,
    required: true,
    trim: true
  },
  foundDescription: {
    type: String,
    required: true
  },
  foundImage: {
    type: String,
  },
  foundDate: {
    type: Date,
    default: Date.now
  }
})

foundSchema.set("timestamps", true)

const Found = mongoose.model("Found", foundSchema)

module.exports = Found