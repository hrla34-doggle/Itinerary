const Trip = require("./index");

const models = {
  get: () => {
    return Trip.find({});
  },
  post: trip => {
    return Trip.create(trip);
  },
  delete: () => {
    return Trip.deleteMany({});
  }
};

module.exports = models;
