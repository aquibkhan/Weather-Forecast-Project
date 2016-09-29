angular.module("logIn")
	.controller('LoginController', loginController);
	
loginController.$inject = ["$location"];
function loginController($location) {
	_this = this;
	
	_this.validateUser = validateUser;

	function validateUser() {
		if (_this.userName === "user" && _this.password === "123") {
			$location.path("/weather-forecast");
		}
	}
}