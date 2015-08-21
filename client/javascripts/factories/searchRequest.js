parkerApp.factory('SearchFactory', function($http){
	var factory = {};
	var mapSearch = [];
	var searchResults = [];
	factory.getLocation = function(info){
		var location = info.location.split(" ").join("+")
	$http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyCCR3GlKLcIEhDVEsXoebZgOqq-64nEesM').then(function(response){
		mapSearch = response.data;
	})
}
	factory.getCenter = function(callback){
		callback(mapSearch);
	}
	factory.getResults = function(info){
		$http.post('/searchResults', info).success(function(response){
		searchResults = response;
		console.log(response);
		});
	}
	factory.sendResults = function(callback){
		callback(searchResults);
	}
	
	return factory;
})