parkerApp.controller('ResultsController', function ($scope, ResultFactory, $routeParams){
	$scope.space = [];
	ResultFactory.getResult($routeParams.id, function (data){
		$scope.space = data;
	})
	ResultFactory.username(function (data){
		$scope.user = data;
	})
})