var spaces = require('./../server/controllers/spaces.js');
var users = require('./../server/controllers/users.js');

module.exports = function (app) {
	app.get('/getSpaces', function (req, res){
		spaces.getSpaces(req, res);
	})
	app.get('/username', function (req, res){
		spaces.username(req, res);
	})
	app.post('/addSpace', function (req, res){
		spaces.addSpace(req, res)
	})
	app.get('/hostSpace/:id', function (req, res){
		users.hostSpace(req, res);
	})
}