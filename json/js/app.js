var myApp=angular.module("myApp",["ngRoute"]);
myApp.config(function($routeProvider) {
	$routeProvider.when('/profile/{{}}',{
		templateUrl : "hello.html",
		controller : "HelloCtrl"
	});
});
myApp.controller("HelloCtrl", function ($scope, $routeParams,$http) {

    $scope.id=index;

});