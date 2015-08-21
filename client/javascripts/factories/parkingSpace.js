parkerApp.factory('ParkingSpaceFactory', function ($http, $location) {
	var factory = {};
	factory.getSpaces = function (callback){
		$http.get('/getSpaces').success(function (output){
			console.log('getSpaces', output);
			callback(output);
		})
	}
	factory.addSpace = function (info, user_id, callback){
		$http.post('/addSpace/'+user_id, info).success(function (output){
			console.log('addSpace', output);
			callback(output);
		})
	}
	factory.hostSpace = function (user, space_id, callback){
		$http.get('/hostSpace/'+space_id).success(function (output){
			console.log('hostSpace', output);
			callback(output);
		})
	}
	factory.getUser = function (callback){
		$http.get('/username').success(function (output){
			// console.log(output);
			callback(output);
		})
	}
	factory.logout = function (user_id, callback){
		var userID = {_id: user_id};
		console.log(userID);
		$http.post('/logout', userID).success(function (output){
			console.log('logged out - factory');
			$location.path('/');
		});
	}
	return factory;
})