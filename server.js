require('dotenv').config();
const express = require("express");
const mongoose = require ("mongoose");
bodyParser = require("body-parser"),
cors = require('cors'),
// session = require('express-session'),
// passport = require('passport'),
PORT = process.env.PORT || 3001;

const app = express();

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

/*********Define middleware here**********/
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));

/*Passport.js**/
// app.use(session({
//   secret:"The secret.",
//   resave:false,
//   saveUninitialized: false,
// }))

// app.use(passport.initialize());
// app.use(passport.session());

/*********Connect to mongoose**********/
const mongoURI = 'mongodb://localhost:27017/lostandfound'

mongoose
.connect(mongoURI,{useNewUrlParser:true})
.then(()=>console.log("Mongo connected"))
.catch(err => console.log(err))

mongoose.set('useCreateIndex', true);

const Users = require('./routes/Users')

app.use('/users',Users)

/*********Passport.js*
passport.use(User.createStrategy());
 
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
*/

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});