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
<<<<<<< HEAD

                .then (function(response){
                        $scope.products = response.data; // binding the data to the $scope variable
                        $scope.product=response.data[$routeParams.name]
                    });

    $scope.id=$scope.product;
    }
);//end controller
=======
            
                .success (function(data){
                        $scope.products = data; // binding the data to the $scope variable
                    })
    } 
);//end controller

productAppModule.controller('OtherController', OtherController);
>>>>>>> 386fcdcc05309ce4f6562e35ed06da9858b22332
