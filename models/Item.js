const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'lost'
  },
  date: {
    type: Date,
    default: Date.now
  },
  location:{
    type: String
  },
  description:{
    type: String
  }
});

module.exports = mongoose.model('item', ItemSchema);
