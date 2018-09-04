//creating an application module

//Products App module

var productApp = angular.module('productApp', ['ngRoute', 'angularUtils.directives.dirPagination']);
//Navbar direvtive
productApp.directive('mainNavbar',function () {
    return {
        restrict: 'AE',
        templateUrl: 'pages/navbar_01.html',
    }
});
//product.html direvtive
productApp.directive('product',function () {
    return {
        restrict: 'AE',
        templateUrl: 'pages/product.html',
    }
});
function OtherController($scope) {
};
productApp.controller('OtherController', OtherController);
//End Code


productApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider.when('/home',{
        templateUrl : "pages/home.html"
    }).when('/product/:name',{
        templateUrl : "pages/product_directive.html",
        controller : "productCtrl"
    })
    .otherwise({
        redirectTo: '/home'
    })
    ;
    // $routeProvider.reload();
    // $locationProvider.html5Mode(true);
}]);
var productGold = [];
productApp.controller('AppController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/ring_product.json') //reading the product.json file
    .then(function (response) {
        console.log(response.data);
        productGold = response.data; // binding the data to the $scope variable
    });
    console.log(productGold);
  }]);
//Products page controller

productApp.controller("productCtrl", function($scope, $http,$routeParams,$location)  {
    //code for Pagination
    $scope.currentPage = 1;
    $scope.pageSize = 8;
    // $location.path('index.html#!/product/'+$routeParams.name);
    // $http.get('../data/ring_product.json') //reading the product.json file
    // .then(function (response) {
    //     console.log(response.data);
    //     productGold = response.data; // binding the data to the $scope variable
    // });
        if($routeParams.name=="gold") {
            // console.log($routeParams.name);
            $scope.products = productGold;
            // console.log($scope.products);
            // $http.get('../data/ring_product.json') //reading the product.json file
            //     .then(function (response) {
            //         $scope.products = response.data; // binding the data to the $scope variable
            //     });
            // alert("gold");
            $http.get('../data/ring_product.json') //reading the product.json file
                .then(function (response) {
                    $scope.products = response.data; // binding the data to the $scope variable
                });
        }
        if($routeParams.name=="diamon") {
        $http.get('data/ring_diamon_product.json') //reading the product.json file
            .then(function (response) {
                $scope.products = response.data; // binding the data to the $scope variable
            });
        // alert("diamon");

        }
    }
);//end controller

//Product detail page controller
// productApp.controller("productCtrl_detail", function($scope, $http, $routeParams)  {
//             $http.get('../data/ring_product.json') //reading the product.json file
//                 .then (function(response){
//                         $scope.id=$routeParams.id;
//                         console.log($routeParams.id);
//                         $scope.image=response.data[$scope.id-1].image;
//                         $scope.name_product=response.data[$scope.id-1].name;
//                         $scope.sex=response.data[$scope.id-1].sex;
//                         $scope.price=response.data[$scope.id-1].price;
//                         $scope.price_8=response.data[$scope.id-1].price_8;
//                         $scope.price_9=response.data[$scope.id-1].price_9;
//                         $scope.price_10_5=response.data[$scope.id-1].price_10_5;
//                         $scope.title_info=response.data[$scope.id-1].title_info;
//                         $scope.description=response.data[$scope.id-1].description;
//                         $scope.Trade_Mark=response.data[$scope.id-1].trade_mark;
//                         $scope.Stone=response.data[$scope.id-1].stone;
//                         $scope.Color=response.data[$scope.id-1].color;
//                         $scope.Shape=response.data[$scope.id-1].shape;
//                         $scope.Cara=response.data[$scope.id-1].cara;
//                         $scope.Age=response.data[$scope.id-1].age;
//                         $scope.Weight=response.data[$scope.id-1].weight;
//                 });
//
//     }
// );//end controller


$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
