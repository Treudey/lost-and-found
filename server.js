const express = require("express");
const mongoose = require ("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://alex:67ECNUeIAsc30u04@cluster0-ofcaa.mongodb.net/lost_and_found?retryWrites=true&w=majority", {useNewUrlParser: true});

// Add routes here
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});