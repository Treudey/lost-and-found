require('dotenv').config();
const express = require("express");
const mongoose = require ("mongoose"),
cors = require('cors'),
PORT = process.env.PORT || 3001;
const path = require("path");


const Users = require('./routes/Users')
const losts = require('./routes/lost')
const founds = require('./routes/found')

const app = express();

/*********Define middleware here**********/
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));


/*********Connect to mongoose**********/
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lostandfound'

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

mongoose
.connect(mongoURI,{useNewUrlParser:true})
.then(()=>console.log("Mongo connected"))
.catch(err => console.log(err))


mongoose.set('useCreateIndex', true);

// Define Routes
app.use('/users',require('./routes/users'))
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profiles', require('./routes/profiles'));
app.use('/api/found',require('./routes/found'))
app.use('/api/lost',require('./routes/lost'))


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
