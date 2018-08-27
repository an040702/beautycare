// var myApp = angular.module('myApp', ['ui.bootstrap']);

// myApp.controller('myController', function($scope, $http){
// 	$scope.pageSize = 10
//   	$scope.currentPage = 1;
// 	$http.get("category.json").success(function(response){
// 		$scope.names = response;
// 	})

// 	$scope.pageChanged = function() {
//     $log.log('Page changed to: ' + $scope.currentPage);
//   };
	





// })
// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;
  
   $http.get('ring_product.json').success(function(response){
   $scope.meals = response;
 })
  
  $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);