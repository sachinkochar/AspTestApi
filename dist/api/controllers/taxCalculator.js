'use strict';

var taxCalculator = function taxCalculator(req, res, next) {
	var income = req.params.taxAmount;
	console.log(income);
	if (income < 18200) {
		return '0';
	} else if (income < 37000) {
		var tax = income - 37000;
		var total = 32.5 * tax / 100;
		total = 3572 + total;
		console.log(total);
		res.status(200).json({
			message: 'Tax',
			tax: total
		});
	}
};

module.exports = taxCalculator;