parkerApp.factory('ParkingSpaceFactory', function ($http) {
	var factory = {};
	factory.getSpaces = function (callback){
		$http.get('/getSpaces').success(function (output){
			callback(output);
		})
	}
	factory.addSpace = function (info, callback){
		$http.post('/addSpace', info).success(function (output){
			callback(output);
		})
	}
	factory.hostSpace = function (user, space_id, callback){
		$http.get('/hostSpace/'+space_id).success(function (output){
			callback(output);
		})
	}
	factory.getUser = function (callback){
		$http.get('/username').success(function (output){
			// console.log(output);
			callback(output);
		})
	}
	return factory;
})