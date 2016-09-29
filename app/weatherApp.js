angular.module("weatherApp", ["logIn", "weatherInfo"])
	.run(authenticateUser);

authenticateUser.$inject = ["$location"]
function authenticateUser($location) {
	$location.path("/login");
}