var  myApp = angular.module('myApp',['ngRoute']);

myApp.directive('paginationList',function(){
    return {
        restrict: 'AE',
        templateUrl: '../pages/pagination-list.html',
    }
})
