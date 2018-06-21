const express = require('express');
const router = express.Router();
const taxCalculator =require('../controllers/taxCalculator');

// router.get('/',(req,res,next)=>{
//     console.log(req.query)
//     res.status(200).json({
//         message: 'Handling Get requests'
//     })
// });

router.route('/')
    .get(taxCalculator)


module.exports= router;