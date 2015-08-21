parkerApp.factory('ResultFactory', function ($http){
	var factory = {};
	factory.getResult = function (space_id, callback){
		$http.get('/singleSpace/'+space_id).success(function (output){
			callback(output);
		})
	}
	factory.username = function (callback){
		$http.get('/username').success(function (output){
			callback(output);
		})
	}
	return factory;
})