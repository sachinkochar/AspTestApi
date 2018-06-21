var taxCalculator =(req,res,next)=>{
	var income = req.query.income
	var superRate = req.query.superRate
	console.log(superRate)
	console.log(income)
	if(income <= 18200){
		res.status(200).json({
            message: 'Tax',
            tax: 'nil'
        })
	}else if(income <= 37000){
		var tax= income - 18200;
		var total = 19 * tax/100;
		console.log(total)
		res.status(200).json({
            message: 'Tax',
            tax: total
        })

	}else if(income <= 87000){
		var tax= income - 37000;
		var total = 32.5 * tax/100;
		total = 3572+total
		console.log(total)
		res.status(200).json({
            message: 'Tax',
            tax: total
        })

	}else if(income <= 180000){
		var tax= income - 87000;
		var total = 37 * tax/100;
		total = 19822+total
		console.log(total)
		res.status(200).json({
            message: 'Tax',
            tax: total
        })
	}else{
		var tax= income - 180000;
		var total = 45 * tax/100;
		total = 54232+total
		console.log(total)
		res.status(200).json({
            message: 'Tax',
            tax: total
        })
	}
}

module.exports= taxCalculator;