angular.module("weatherInfo", ["ngRoute", "ngAutocomplete"])
	.config(Config);

Config.$inject = ["$routeProvider"];
function Config($routeProvider) {
	$routeProvider.when("/weather-forecast", {
		templateUrl: "app/weather-forecast/template/weather.html",
		controller: "WeatherController",
		controllerAs: "weatherController",
		label: "Weather Information"
	})
	.otherwise({
		redirectTo: "/login"
	});
}