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
	$scope.addSpace = function (){
		ParkingSpaceFactory.addSpace($scope.newSpace, function (data){
			ParkingSpaceFactory.hostSpace($scope.user._id, data._id, function (data){
				console.log('you made it here', data);
			})
		})
	}
})