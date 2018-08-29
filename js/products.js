//creating an application module
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

//Products App module

var productApp = angular.module('productApp', ['ngRoute', 'angularUtils.directives.dirPagination']);

productApp.config(function($routeProvider) {
    $routeProvider.when('/profile_gold/:id',{
        templateUrl : "profile_gold.html",
        controller : "productCtrl_detail"
    });
});

//Navbar direvtive
productApp.directive('mainNavbar',function () {
    return {
        restrict: 'AE',
        templateUrl: '../pages/navbar_01.html',
    }
})

//Index.html Navbar direvtive
productApp.directive('mainNavbarHomePage',function () {
    return {
        restrict: 'AE',
        templateUrl: './common/navbar.html',
    }
})

//code for Pagination
function OtherController($scope) {
  
};

productApp.controller('OtherController', OtherController);
//End Code 

//Products page controller
productApp.controller("productCtrl", function($scope, $http, $routeParams)  {
    //code for Pagination
    $scope.currentPage = 1;
    $scope.pageSize = 8;

            $http.get('../data/ring_product.json') //reading the product.json file

                .then (function(response){
                        $scope.products = response.data; // binding the data to the $scope variable

                    });
    }
);//end controller

//Product detail page controller
productApp.controller("productCtrl_detail", function($scope, $http, $routeParams)  {
            $http.get('../data/ring_product.json') //reading the product.json file
                .then (function(response){
                        $scope.id=$routeParams.id;
                        console.log($routeParams.id);
                        $scope.image=response.data[$scope.id-1].image;
                        $scope.name_product=response.data[$scope.id-1].name;
                        $scope.sex=response.data[$scope.id-1].sex;
                        $scope.price=response.data[$scope.id-1].price;
                        $scope.price_8=response.data[$scope.id-1].price_8;
                        $scope.price_9=response.data[$scope.id-1].price_9;
                        $scope.price_10_5=response.data[$scope.id-1].price_10_5;
                        $scope.title_info=response.data[$scope.id-1].title_info;
                        $scope.description=response.data[$scope.id-1].description;
                        $scope.Trade_Mark=response.data[$scope.id-1].trade_mark;
                        $scope.Stone=response.data[$scope.id-1].stone;
                        $scope.Color=response.data[$scope.id-1].color;
                        $scope.Shape=response.data[$scope.id-1].shape;
                        $scope.Cara=response.data[$scope.id-1].cara;
                        $scope.Age=response.data[$scope.id-1].age;
                        $scope.Weight=response.data[$scope.id-1].weight;
                });

    }
);//end controller

productApp.config(function($routeProvider) {
    $routeProvider.when('/profile_diamon/:id',{
        templateUrl : "profile_gold.html",
        controller : "productCtrl_detail_diamon"
    });
});
productApp.controller("productCtrl_diamon", function($scope, $http, $routeParams)  {
        $http.get('../data/ring_diamon_product.json') //reading the product.json file

            .then (function(response){
                $scope.products = response.data; // binding the data to the $scope variable

            });
    }
);//end controller

productApp.controller("productCtrl_detail_diamon", function($scope, $http, $routeParams)  {
        $http.get('../data/ring_diamon_product.json') //reading the product.json file
            .then (function(response){
                $scope.id=$routeParams.id;
                $scope.image=response.data[$scope.id-1].image;
                $scope.name_product=response.data[$scope.id-1].name;
                $scope.sex=response.data[$scope.id-1].sex;
                $scope.price=response.data[$scope.id-1].price;
                $scope.price_8=response.data[$scope.id-1].price_8;
                $scope.price_9=response.data[$scope.id-1].price_9;
                $scope.price_10_5=response.data[$scope.id-1].price_10_5;
                $scope.title_info=response.data[$scope.id-1].title_info;
                $scope.description=response.data[$scope.id-1].description;
                $scope.Trade_Mark=response.data[$scope.id-1].trade_mark;
                $scope.Stone=response.data[$scope.id-1].stone;
                $scope.Color=response.data[$scope.id-1].color;
                $scope.Shape=response.data[$scope.id-1].shape;
                $scope.Cara=response.data[$scope.id-1].cara;
                $scope.Age=response.data[$scope.id-1].age;
                $scope.Weight=response.data[$scope.id-1].weight;
            });

    }
);//

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
