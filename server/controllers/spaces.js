var mongoose = require('mongoose');
var Space = mongoose.model('ParkingSpace');

module.exports = (function() {
	return{
		getSpaces: function (req, res){
			Space.find({}, function (err, spaces){
				if(err){
					console.log(err);
				}else{
					res.json(spaces);
				}
			})
		},
		username: function (req, res){
			console.log(req.session.value);
			var username = req.session.value;
			// console.log(username);
			res.json(username);
		},
		addSpace: function (req, res){
			var space = new Space({
				spaceType: req.body.type,
				carType: req.body.car,
				address: req.body.address,
				state: req.body.state,
				zip: req.body.zip,
				image: req.body.image,
				price: req.body.price,
				dateStart: req.body.dateStart,
				dateEnd: req.body.dateEnd,
				reserved: false,
				_UserHost: req.session.value._id
			})
			space.save(function (err){
				if(err){
					console.log(err);
				}else{
					res.json(space);
				}
			})
		}
	}
})();