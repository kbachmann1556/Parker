parkerApp.controller('ParkingSpacesController', function ($scope, ParkingSpaceFactory){
	$scope.spaces = [];
	ParkingSpaceFactory.getSpaces(function (data){
		$scope.spaces = data;
	});
	ParkingSpaceFactory.getUser(function (data){
		$scope.user = data;
	})
	$scope.addSpace = function (){
		ParkingSpaceFactory.addSpace($scope.newSpace, function (data){
			ParkingSpaceFactory.hostSpace($scope.user._id, data._id, function (data){
				console.log('you made it here', data);
			})
		})
	}
})