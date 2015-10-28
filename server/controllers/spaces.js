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
			// console.log(req.session);
			var username = req.session.value;
			// console.log(username);
			res.json(username);
		},
		searchSession: function (req, res){
			req.session.save(function (err){
				req.session.search = req.body.data
				if (err){
					console.log('there was an error');
				}else{
					res.json(req.body);
				}
			});
		},
		getSearchSession: function (req, res){
			res.json(req.session.search);
		},
		addSpace: function (req, res){
			console.log(req.body);
			var space = new Space({
				spaceType: req.body[0],
				carType: req.body[1],
				// address: req.body.address,
				// city: req.body.city,
				// state: req.body.state,
				// zip: req.body.zip,
				image: req.body[2],
				price: req.body[3],
				dateStart: req.body[4],
				dateEnd: req.body[5],
				LatLongData: req.body[7],
				reserved: false,
				_UserHost: req.params.id
			})
			space.save(function (err){
				if(err){
					console.log(err);
				}else{
					console.log('added space to database');
					res.json(space);
				}
			})
		},
		showResults: function(req,res){
			console.log("Controller", req.body)
			// console.log("City", city[1])
			Space.find({city: city[1]}, function (err,spaces){
				if(err){
					console.log(err);
				}
				else{
					res.json(spaces);
				}
			})
		},
		getThisSpace: function (req, res){
			Space.findOne({_id: req.params.id}, function (err, space){
				if(err){
					console.log(err);
				}else{
					res.json(space);
				}
			})
		}
	}
})();