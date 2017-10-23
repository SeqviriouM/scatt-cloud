'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const initRoutes = require('./routes');

const app = express();

app.use(bodyParser());
app.use(cookieParser());

initRoutes(app);

app.listen(3000, () => {
    console.log('Application started');
});