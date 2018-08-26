var  myApp = angular.module('myApp',['ngRoute']);

// myApp.config(function ($routeProvider) {
//     $routeProvider.when('/navbar_01',{
//         templateUrl: './pages/navbar_01.html',
//         controller: 'NavbarController'
//     });
// });

// Custome directive

myApp.directive('mainNavbar',function () {
    return {
        restrict: 'AE',
        // template: '<h3>Hello AngularJS</h3> <p>I was made inside custom directive</p>',
        templateUrl: '../pages/navbar_01.html',
        // replace: false
    }
})

myApp.directive('mainNavbarHomePage',function () {
    return {
        restrict: 'AE',
        // template: '<h3>Hello AngularJS</h3> <p>I was made inside custom directive</p>',
        templateUrl: './common/navbar.html',
        // replace: false
    }
})

// myApp.controller('NavbarController',['$scope',function($scope){
//     $scope.name = "Home controller";
//     $scope.detail = "Welcome to home controller";
// }]);