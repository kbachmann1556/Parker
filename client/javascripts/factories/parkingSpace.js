parkerApp.factory('ParkingSpaceFactory', function ($http, $location) {
	var factory = {};
	factory.getSpaces = function (callback){
		$http.get('/getSpaces').success(function (output){
			// console.log('getSpaces', output);
			callback(output);
		})
	}
	factory.addSpace = function (info, user_id, callback){
		var address = info.address.split(" ").join("+");
		var city = info.city.split(" ").join("+");
		var location = address+',+'+city+',+'+info.state;
		var backEndData = [info.type, info.car, info.image, info.price, info.dateStart, info.dateEnd]
		// console.log('location', location);
		$http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyCCR3GlKLcIEhDVEsXoebZgOqq-64nEesM').then(function (output){
			backEndData.push(output.data)
			$http.post('/addSpace/'+user_id, backEndData).success(function (output){
				console.log('add Space', output);
				callback(output);
			});
		});
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