const db = require ('./index.js');

module.exports = {
  getOne: (id) => {
    return db.query(`SELECT * FROM trips 
      INNER JOIN schedules ON (trips.id=schedules.trip_id)
      INNER JOIN optionals ON (trips.id=optionals.trip_id)
      INNER JOIN cities ON (schedules.city_id=cities.id) WHERE trips.id=${id};`);
  }
}