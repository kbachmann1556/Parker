parkerApp.factory('SearchFactory', function($http){
	var factory = {};
	factory.getLocation = function(info){
		var location = info.location.split(" ").join("+")
		console.log(location);
	$http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyCCR3GlKLcIEhDVEsXoebZgOqq-64nEesM').then(function(response){
		console.log(response.data);
	})
}
	return factory;
})