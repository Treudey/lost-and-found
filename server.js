require('dotenv').config();
const express = require("express");
const mongoose = require ("mongoose");
const routes = require("./routes"),
bodyParser = require("body-parser"),
session = require('express-session'),
passport = require('passport'),
GoogleStrategy = require('passport-google-oauth20').Strategy,
PORT = process.env.PORT || 3001;

const User = require('./models/User');

const app = express();

/*********Define middleware here**********/
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  secret:"The secret.",
  resave:false,
  saveUninitialized: false,
}))

app.use(passport.initialize());
app.use(passport.session());


/*********Connect to mongoose**********/
mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_LINK, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

/*********Passport.js**********/
passport.use(User.createStrategy());
 
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/claim",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

/***********Add routes here********/
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});