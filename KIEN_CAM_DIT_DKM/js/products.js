//creating an application module

var productApp = angular.module("productApp", ["ngRoute"]);
productApp.config(function($routeProvider) {
    $routeProvider.when('/profile',{
        templateUrl : "hello.html",
        controller : "productCtrl"
    });
});

productApp.controller("productCtrl", function($scope, $http, $routeParams)  {
            $http.get('data/ring_product.json') //reading the product.json file

                .then (function(response){
                        $scope.products = response.data; // binding the data to the $scope variable
                        $scope.product=response.data[$routeParams.name]
                    });

    $scope.id=$scope.product;
    }
);//end controller

