parkerApp.controller('RequestsController', function($scope, $location, SearchFactory){
	$scope.sendRequest = function(){
		SearchFactory.getLocation($scope.request);
		$location.path('/search')
	}
})