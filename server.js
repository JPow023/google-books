const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use((req, res, next) => {
  console.log(req.url)
  next();
});
// Add API routes
app.use(routes);

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://username:password1@ds111618.mlab.com:11618/heroku_drg5vndj");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});