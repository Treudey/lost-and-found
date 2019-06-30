const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
// const passportLocalMongoose = require('passport-local-mongoose')
// const findOrCreate = require('mongoose-findorcreate')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    index: {unique: true},
    trim: true,
    minlength: 6,
    maxlength: 12,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: 6,
  },
  googleId:String,
  claimedItem:String
});

// userSchema.methods.generateHash = function(password){
//   return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
// }

// userSchema.methods.validPassword = function(password){
//   return bcrypt.compareSync(password,this.password)
// }

// UserSchema.plugin(passportLocalMongoose);
// UserSchema.plugin(findOrCreate);

// userSchema.pre('save', function (next) {
// 	if (!this.password) {
// 		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
// 		next()
// 	} else {
// 		console.log('models/user.js hashPassword in pre save');
		
// 		this.password = this.hashPassword(this.password)
// 		next()
// 	}
// })

const User = mongoose.model('users', UserSchema)

module.exports = User 