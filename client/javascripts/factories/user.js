parkerApp.factory('UserFactory', function ($http){
	var factory = {};
	factory.addUser = function (info, callback){
		$http.post('/addUser', info).success(function (output){
			callback(output);
		})
	}
	factory.getUser = function (info, callback){
		console.log(info, 'factory');
		$http.get('/getUser/'+info.username+'/'+info.password).success(function (output){
			callback(output);
		})
	}
	factory.setSession = function (info, callback){
		$http.post('/setSession', info).success(function (output){
			callback(output);
		});
	}
	return factory;
})