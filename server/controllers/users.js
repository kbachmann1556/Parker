var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function (req, res){
	return{
		addUser: function (req, res){
			var user = new User({
				username: req.body.username,
				email: req.body.email,
				password: req.body.password
			})
			user.save(function (err){
				if(err){
					console.log(err);
				}else{
					res.json(user);
				}
			})
		},
		getUser: function (req, res){
			User.findOne({username: req.params.username, password: req.params.password}, function (err, user){
				if(err){
					console.log(err);
				}else{
					res.json(user);
				}
			})
		},
		getSingleUser: function (req, res){
			User.findOne({_id: req.body._id}, function (err, user){
				if(err){
					console.log(err);
				}else{
					res.json(user);
				}
			})
		},
		hostSpace: function (req, res){
			User.findOne({_id: req.session.value._id}, function (err, user){
				user.hostedSpaces.push(req.params.id);
				user.save(function (err){
					if(err){
						console.log(err);
					}else{
						res.json(user);
					}
				})
			})
		}
	}
})();