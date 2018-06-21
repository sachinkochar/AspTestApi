'use strict';

var express = require('express');
var app = express();
var taxRoutes = require('./api/routes/tax');

var morgan = require('morgan');

app.use(morgan('dev'));

app.use('/tax', taxRoutes);

module.exports = app;