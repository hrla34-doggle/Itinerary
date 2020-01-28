const mongoose = require("mongoose");

const TripSchema = mongoose.Schema({
  name: String,
  location: String,
  days: Number,
  cities: [String],
  mapPic: String
});

module.exports = TripSchema;
