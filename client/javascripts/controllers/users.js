parkerApp.controller('UsersController', function ($scope, UserFactory, $location){
	$scope.user = [];
	$scope.addUser = function (){
		UserFactory.addUser($scope.newUser, function (data){
			UserFactory.getUser(data, function (data){
				UserFactory.setSession(data, function (data){
					// console.log('you made it here too!', data);
					$location.path('/create');
				});
			})
		});
	}
	$scope.getUser = function (){
		UserFactory.getUser($scope.loginUser, function (data){
			// console.log('use this info to set session', data);
			UserFactory.setSession(data, function (data){
				// console.log('you made it here', data);
				$location.path('/create');
			});
		})
	}
})