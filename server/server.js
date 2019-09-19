require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const logger = require("morgan");

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bodyParser = require('body-parser');



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


app.use(logger("dev"));


// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/resteasy-redux";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });




// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});