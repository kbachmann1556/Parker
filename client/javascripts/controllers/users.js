parkerApp.controller('UsersController', function ($scope, UserFactory){
	$scope.user = [];
	$scope.addUser = function (){
		UserFactory.addUser($scope.newUser, function (data){
			UserFactory.getUser(data, function (data){
				UserFactory.setSession(data, function (data){
					console.log('you made it here too!', data);
				});
			})
		});
	}
	$scope.getUser = function (){
		UserFactory.getUser($scope.loginUser, function (data){
			UserFactory.setSession(data, function (data){
				console.log('you made it here', data);
			});
		})
	}
})