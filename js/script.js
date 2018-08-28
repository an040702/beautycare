
var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 8;
  
   $http.get('../data/ring_product.json').success(function(response){
   $scope.products = response;
 })
  
 
}

function OtherController($scope) {
  
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);