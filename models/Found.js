//Require Node Modules
const mongoose = require("mongoose");
// const Image = require("./Image");
const Schema = mongoose.Schema
const File = null;
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
    type:String
    //default: Date.now()
  },
  foundImageURL: {
    type: String
    //file: { mime: String, bin: Buffer }
  }
})

foundSchema.set("timestamps", true)

const Found = mongoose.model("Found", foundSchema)

module.exports = Found