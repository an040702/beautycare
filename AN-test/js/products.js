//creating an application module
var productAppModule = angular.module("productApp", []);
//The below code will read the data from product.json file and will pass to the $scope variable 
productAppModule.controller("productCtrl", function($scope, $http){    
            $http.get('data/ring_product.json') //reading the product.json file
            
                .success (function(data){
                        $scope.products = data; // binding the data to the $scope variable
                    })
    } 
);//end controller

productAppModule.controller('OtherController', OtherController);