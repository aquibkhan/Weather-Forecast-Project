'use strict';

angular.module('weather')
	.service("weatherService", weatherService)
	
weatherService.$inject = ["$q", "$http"];
function weatherService($q, $http) {
	var weather = this;
	weather.get = getWeatherFromServer;

	function getWeatherFromServer(city) {
	  var deferred = $q.defer();
	  var url = 'http://api.openweathermap.org/data/2.5/weather';
	  var params = {
		q: city,
		units: 'metric',
		count: '7',
		APPID: '194f0378b785ad2e9fd28f494ee6595d'
	  };
	  $http({
		method: 'GET',
		url: url,
		params: params,
	  }).success(function(data) {
		var weatherData = prepareWeather(data);
		deferred.resolve(weatherData);
	  });

	  return deferred.promise;
	}

	function prepareWeather(weatherData) {
		
	  return weatherData;
	}
};

