//Require Node Modules
const validator = require("validator")
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const lostSchema = new Schema({
  lostLocation:{
    type:String,
    required: true,
    trim: true
  },
  lostColor:{
    type:String,
    required: true,
    trim: true
  },
  lostPhoneNumber:{
    type:Number,
    required: true,
    trim: true
  },
  
  lostTitle: {
    type: String,
    required: true,
    trim: true
  },
  lostDescription: {
    type: String,
    required: true
  },
  lostImage: {
    type: String,
  },
  lostDate: {
    type:String
    //default: Date.now()
  },
  lostImageURL: {
    type: String
    //file: { mime: String, bin: Buffer }
  }
})

lostSchema.set("timestamps", true)

const Lost = mongoose.model("Lost", lostSchema)

module.exports = Lost