'use strict';

var express = require('express');
var router = express.Router();
var taxCalculator = require('../controllers/taxCalculator');

router.get('/', function (req, res, next) {
    res.status(200).json({
        message: 'Handling Get requests'
    });
});

router.route('/:taxAmount').get(taxCalculator);

module.exports = router;