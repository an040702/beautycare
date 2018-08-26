//creating an application module

var productApp = angular.module("productApp", ["ngRoute"]);
productApp.config(function($routeProvider) {
    $routeProvider.when('/profile',{
        templateUrl : "hello.html",
        controller : "productCtrl_detail"
    });
});

productApp.controller("productCtrl", function($scope, $http, $routeParams)  {
            $http.get('data/ring_product.json') //reading the product.json file

                .then (function(response){
                        // console.log(response.data);
                        // console.log(response.data);
                        $scope.products = response.data; // binding the data to the $scope variable
                        // $scope.product = response.data[$routeParams.name]
                        // console.log($routeParams.name);
                    });

    // $scope.id=$scope.product;
    }
);//end controller

productApp.controller("productCtrl_detail", function($scope, $http, $routeParams)  {
            $http.get('data/ring_product.json') //reading the product.json file

                .then (function(response){
                        // console.log(response.data);
                        // console.log(response.data[0].name);
                        $scope.abc = response.data[0].name; // binding the data to the $scope variable
                        console.log($scope.abc);
                        // $scope.product = response.data[$routeParams.name]
                        // console.log($routeParams.name);
                    });

    // $scope.TenSP = $scope.abc;
    }
);//end controller

