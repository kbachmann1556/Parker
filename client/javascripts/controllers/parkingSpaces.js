parkerApp.controller('ParkingSpacesController', function ($scope, ParkingSpaceFactory, SearchFactory, $location){
	$scope.spaces = [];
	ParkingSpaceFactory.getSpaces(function (data){
		$scope.spaces = data;
	});
	$scope.user = [];
	ParkingSpaceFactory.getUser(function (data){
		// console.log(data);
		$scope.user = data;
	})
	$scope.addSpace = function (user_id){
		ParkingSpaceFactory.addSpace($scope.newSpace, user_id,function (data){
			ParkingSpaceFactory.hostSpace(user_id, data._id, function (data){
				console.log('you made it here', data);
			})
		})
	}
	$scope.logout = function (user_id){
		ParkingSpaceFactory.logout(user_id, function (data){
			console.log('logged out - controller');
			$location.path('/');
		});
	}
	$scope.sendRequest = function (){
		SearchFactory.getLocation($scope.request, function (data){
			SearchFactory.setSession(data, function (data){
				console.log('you set the search session', data);
				$location.path('/results');
			});
		});
		// SearchFactory.getResults($scope.request);
	}
})