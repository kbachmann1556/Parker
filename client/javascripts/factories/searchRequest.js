parkerApp.factory('SearchFactory', function($http){
	var factory = {};
	var mapSearch = [];
	var searchResults = [];
	factory.getLocation = function(info, callback){
		var location = info.location.split(" ").join("+")
		$http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyCCR3GlKLcIEhDVEsXoebZgOqq-64nEesM').then(function (output){
			callback(output);
		});
	}
	factory.setSession = function (info, callback){
		$http.post('/setSearchSession', info).success(function (output){
			callback(output);
		});
	}
	factory.getCenter = function(callback){
		$http.get('/searchSession').success(function (output){
			callback(output);
		});
	}
	factory.getResults = function(info){
		$http.post('/searchResults', info).success(function (output){
			callback(output);
		// console.log(response, 'getResults factory');
		});
	}
	factory.sendResults = function(callback){
		callback(searchResults);
	}
	
	return factory;
})