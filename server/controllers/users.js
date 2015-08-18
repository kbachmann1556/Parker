var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function (req, res){
	return{
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
})