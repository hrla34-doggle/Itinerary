const mongoose = require("mongoose");

const TripSchema = mongoose.Schema({
  id: Number,
  name: String,
  location: String,
  days: Number,
  cities: [String],
  mapPic: String,
  schedule: Array,
  optionals: Array
});

module.exports = TripSchema;
