require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT || 3002;
const path = require("path");
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));


// Define Routes
app.use('/api/users',require('./routes/Users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/items', require('./routes/items'));
app.use('/api/found',require('./routes/api/found'));
app.use('/api/lost',require('./routes/api/lost'));

//for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
