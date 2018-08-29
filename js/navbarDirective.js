var  myApp = angular.module('myApp',['ngRoute']);

// Custome directive

myApp.directive('mainNavbar',function () {
    return {
        restrict: 'AE',
        templateUrl: '../pages/navbar_01.html',
    }
})

myApp.directive('mainNavbarHomePage',function () {
    return {
        restrict: 'AE',
        templateUrl: './common/navbar.html',
    }
})
