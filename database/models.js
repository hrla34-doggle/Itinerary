const Trip = require("./index");

const models = {
  get: () => {
    return Trip.find({}).sort({id:1});
  },
  post: trip => {
    return Trip.create(trip);
  },
  delete: () => {
    return Trip.deleteMany({});
  }
};

module.exports = models;
