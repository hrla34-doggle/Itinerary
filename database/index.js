const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/trips";
const TripSchema = require("./schema");

mongoose.Promise = global.Promise;

var database = mongoose
  .connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB is Mongood!");
  });

var Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
