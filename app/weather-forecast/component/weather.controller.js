angular.module("weatherInfo")
	.controller('WeatherController', weatherController);
	
weatherController.$inject = ["weatherService"];
function weatherController(weatherService) {
	_this = this;

	_this.getWeatherInfo = getWeatherInfo;
	
	function getWeatherInfo() {
		weatherService.get(_this.city).then(function (response) {
			_this.cityWeather = response.main.temp;
			_this.description = response.weather[0].description;
			_this.humidity = response.main.humidity;
			_this.pressure = response.main.pressure;
			_this.iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
		});
	}
}