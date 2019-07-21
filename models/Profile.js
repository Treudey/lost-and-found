const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  foundTitle: {
    type: String,
    required: true,
    trim: true
  },
  foundPhoneNumber:{
    type:Number,
    required: true,
    trim: true
  },
  foundDate: {
    type: Date,
    default: Date.now
  },
  foundColor:{
    type:String,
    required: true,
    trim: true
  },
  foundLocation:{
    type:String,
    required: true,
    trim: true
  },
  foundDescription: {
    type: String,
    required: true
  },
  foundImage: {
    type: String,
  }
});

module.exports = mongoose.model('profile', ProfileSchema);