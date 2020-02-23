const Pool = require('pg').Pool;

const db = new Pool({
  user: 'sdcuser',
  host: 'localhost',
  database: 'trips',
  password: '123456',
  port: 5432
});

module.exports = db;
