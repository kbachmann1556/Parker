parkerApp.controller('ParkingSpacesController', function ($scope, ParkingSpaceFactory, SearchFactory){
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
		});
	}
	$scope.sendRequest = function (){
		SearchFactory.getLocation($scope.request);
		SearchFactory.getResults($scope.request);
	}
})