const express = require('express');
const port = 3000;
const router = require('./routes');
const path = require('path');

const app = express();

app.use('/trips', router);

app.use(express.static(path.join(__dirname, '../public')))

app.listen(port, ()=>{console.log(`Now listening on port: ${port}`)});