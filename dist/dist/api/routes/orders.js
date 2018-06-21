'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({
        message: 'Handling Get orders'
    });
});

router.post('/', function (req, res, next) {
    res.status(200).json({
        message: 'Handling Post orders '
    });
});

router.get('/:orderId', function (req, res, next) {
    res.status(201).json({
        message: 'Order details',
        id: req.params.orderId
    });
});

router.delete('/:orderId', function (req, res, next) {
    res.status(201).json({
        message: 'Order deleted',
        id: req.params.orderId
    });
});

module.exports = router;