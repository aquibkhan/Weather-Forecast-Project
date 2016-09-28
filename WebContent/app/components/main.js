angular.module('weather', ['ngAutocomplete'])
	.controller('weatherController', function($scope, weatherService) {

		$scope.result = function(cityWeather) {
			weatherService.get(cityWeather).then(function (response) {
				$scope.cityWeather = response.main.temp;
			});;
	    };
	});
