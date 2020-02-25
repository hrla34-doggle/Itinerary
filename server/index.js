require('newrelic');

const express = require('express');
const port = 3000;
const router = require('./routes');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use('/trips/hi', router);
app.use(express.static(path.join(__dirname, '../public')))


app.listen(port, ()=>{console.log(`Now listening on port: ${port}`)});

module.exports = app;