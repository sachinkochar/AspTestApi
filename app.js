const express = require('express');
const app = express();
const taxRoutes = require('./api/routes/tax');
const cors = require('cors');

const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors())
app.use('/tax',taxRoutes);

module.exports = app;