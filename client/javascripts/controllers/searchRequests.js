parkerApp.controller('RequestsController', function ($scope, $location, SearchFactory){
	var x = 0;
	var y = 0;
	var pin;
	SearchFactory.getCenter(function (data){
		console.log('getCenter controller',data);
		x = data.results[0].geometry.location.lat;
		y = data.results[0].geometry.location.lng;
		pin = {lat: x, lng: y};
		(function initialize(){
			var mapCanvas = document.getElementById('map');
			var mapOptions = {
				center: new google.maps.LatLng(x, y),
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(mapCanvas, mapOptions);
			var homeMarker = new google.maps.Marker({
				position: mapOptions.center,
				// icon: 'pinkball.png'
			});
			homeMarker.setMap(map);
			var homeInfoWindow = new google.maps.InfoWindow({
				content: data.results[0].formatted_address
			});
			google.maps.event.addListener(homeMarker, 'click', function(){
				homeInfoWindow.open(map, homeMarker);
			});
			setMarkers(map);
		})();
		SearchFactory.getResults(data, function (data){
			
		})
	});
	SearchFactory.sendResults(function (data){
		$scope.results = data;
		// console.log("controller:", $scope.results);
	});
		
	function setMarkers(map){
		var locations = [[12,32],[34,12],[11,22]]
		for(var i=0; i<locations.length; i++){
			var location = locations[i]	
			var marker = new google.maps.Marker({
				position: {lat: location[0], lng: location[1]},
				map: map
			})
		}
	}
})