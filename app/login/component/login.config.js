angular.module("logIn", ["ngRoute"])
	.config(Config);

Config.$inject = ["$routeProvider"];
function Config($routeProvider) {
	$routeProvider.when("/login", {
		templateUrl: "app/login/template/login.html",
		controller: "LoginController",
		controllerAs: "loginController",
		label: "login"
	})
	.otherwise({
		redirectTo: "/"
	});
}