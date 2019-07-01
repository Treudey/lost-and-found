const passport = require('passport'),
LocalStrategy = require ('./localStrategy'),
User = require('../models/User')

passport.serializeUser((user, done) =>{
    done(null, {_id:user._id});
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, (err, user)=> {
      done(err, user);
    });
  });

passport.use(LocalStrategy)

module.exports = passport