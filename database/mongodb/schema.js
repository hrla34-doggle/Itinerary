const mongoose = require("mongoose");

const TripSchema = mongoose.Schema({
  id: { type: Number, index: true }, // sequential from 0 - 10mill
  name: String, // name of activity
  location: String, // country name
  days: Number, // random int from 3-10 days
  cities: String, // Array of strings
  mapPic: String, // url to picture of map
  schedule: String, // Array of mix things...
  optionals: String, // array of objects for optional events
  coordinates: String // 
});

module.exports = TripSchema;

// const TripSchema = mongoose.Schema({
//   id: Number, // sequential from 0 - 10mill
//   name: String, // name of activity
//   location: String, // country name
//   days: Number, // random int from 3-10 days
//   cities: Array, // Array of strings
//   mapPic: String, // url to picture of map
//   schedule: Array, // Array of mix things...
//   optionals: Array, // array of objects for optional events
//   coordinates: Array // 
// });
/*
--schedule--
Array of objects
shape of object: {
  activity: STRING activity name
  city: STRING city name
  title: STRING sub heading of the activity
  hotel: STRING name of hotel stay
  meal: STRING of all the avalible meals for the day
  description: String of description
}

example:
activity: "arrive ",
city: "Taipei ",
title: "Arrive in Taipei (2 Nights) ",
hotel: "Taipei 101 ",
meal: "breakfast, lunch, dinner "
*/

/*
--optionals--
Array of Objects - for optional events
shape of object: {
  title: STRING optional activity,
  price: STRING,
  description: STRING
  day: NUMBER
}

example:
{
  title: "Dancing at night ",
  price: "$34.69 ",
  description: "Dance all night for fun my bro "
  day: 3
}

*/

/*
  --coordnates--
  Array of objects for coordinates of the trip locations
  shape of object: {
    top: NUMBER,
    left: NUMBER
  }
*/