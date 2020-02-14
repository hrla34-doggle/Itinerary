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
  },
  getOne: (id) => {
    return Trip.findOne({id});
  },
  deleteOne: (id) => {
    return Trip.findOneAndDelete({id});
  }
};

module.exports = models;
