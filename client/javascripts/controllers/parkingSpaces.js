parkerApp.controller('ParkingSpacesController', function ($scope, ParkingSpaceFactory){
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
})