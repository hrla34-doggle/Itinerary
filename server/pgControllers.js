const pgModel = require('../database/postgres/models');

module.exports = {
  getOne: (req, res) => {
    pgModel.getOne(req.params.id)
      .then(val => {

        res.status(200).send(val.rows);
      })
      .catch(err => {
        res.status(400).send(err);
      })
  }
}