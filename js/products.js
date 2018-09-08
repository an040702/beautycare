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
// productApp.controller("urlCtrl", function($scope, $route)  {
//     $scope.$on('$routeChangeStart', function($event, next, current,$location) { 
//         // ... you could trigger something here ...
//         $location.path('#!/'+ $location.path());
//     });
// });

productApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider.when('/home',{
        templateUrl : "./pages/home.html"
    }).when('/product/:name',{
        templateUrl : "./pages/product.html",
        controller : "productCtrl"
    }).when('/profile/:name/:id',{
        templateUrl : "pages/profile_ring.html",
        controller : "profileCtrl"
    }).when('/checkout',{
        templateUrl : "pages/check_out.html",
        controller : "productCtrl"
    }).otherwise({redirectTo:'/home'});
    // $locationProvider.html5Mode(true);
}]);

var data_array = [];

//function change_quantity and change price;

function change_quantity(e) {
    var check_price=0;
    var sum=0;
    for(check_price;check_price<data_array.length;check_price++){
        document.getElementById("price_no_"+(check_price+1)).innerText=parseInt(data_array[check_price].price)*parseInt(document.getElementById("quantity_no_"+(check_price+1)).value);
        data_array[check_price].value=document.getElementById("quantity_no_"+(check_price+1)).value;
        data_array[check_price].price_quantity=document.getElementById("price_no_"+(check_price+1)).innerText;
        // =data_array[check_price].no;
        sum+=parseInt(data_array[check_price].price_quantity);
    }
    document.getElementById("total").innerText=sum;
}


// productApp.controller("profileCtrl", function($scope, $http,$routeParams,$location) {
//     $scope.currentPage = 1;
//     $scope.pageSize = 12;
//     $scope.name_custom = $routeParams.name;
//     $http.get('data/ring_' + $routeParams.name + '.json') //reading the product.json file
//         .then(function (response) {
//             $scope.products = response.data; // binding the data to the $scope variable
//             $scope.id = $routeParams.id;
//             $scope.image = response.data[$scope.id - 1].image;
//             $scope.name_product = response.data[$scope.id - 1].name;
//             $scope.sex = response.data[$scope.id - 1].sex;
//             $scope.price = response.data[$scope.id - 1].price;
//             $scope.price_8 = response.data[$scope.id - 1].price_8;
//             $scope.price_9 = response.data[$scope.id - 1].price_9;
//             $scope.price_10_5 = response.data[$scope.id - 1].price_10_5;
//             $scope.title_info = response.data[$scope.id - 1].title_info;
//             $scope.description = response.data[$scope.id - 1].description;
//             $scope.Trade_Mark = response.data[$scope.id - 1].trade_mark;
//             $scope.Stone = response.data[$scope.id - 1].stone;
//             $scope.Color = response.data[$scope.id - 1].color;
//             $scope.Shape = response.data[$scope.id - 1].shape;
//             $scope.Cara = response.data[$scope.id - 1].cara;
//             $scope.Age = response.data[$scope.id - 1].age;
//             $scope.Weight = response.data[$scope.id - 1].weight;
//         });
// })
productApp.controller("productCtrl", function($scope, $http,$routeParams,$location) {
    $scope.currentPage = 1;
    $scope.pageSize = 12;
    $scope.name_custom = $routeParams.name;
    $http.get('data/ring_' + $routeParams.name + '.json') //reading the product.json file
        .then(function (response) {
            $scope.products = response.data; // binding the data to the $scope variable
        });
    
    //GET and bind data_array from user.json
    $http.get('data/user.json') //reading the user.json file
        .then(function (response) {
            data_array = response.data; // binding the data to the $scope variable
        });
    //SHOPPING...........................................................
    if(data_array.length>0) {
        displayTable(data_array);
        alert("kien");
    }
            var name_product;
            var price_product;
            var type_product;
            var image_product;
            var id_product;
            var value_product;
            var price_product_quantity;
            $scope.remove_product=function(e) {
                data_array.splice(e-1,1);
                show_shopping();
                if(data_array.length==0){
                    document.getElementById('show_table').innerHTML="EMPTY CART !!!";
                }

            }
            $scope.remove_all_product=function() {
                data_array.splice(0,data_array.length);
                document.getElementById('show_table').innerHTML="EMPTY CART !!!";
            }
            $scope.add_Cart = function (checked_id) {
                //POST data_array to NodeJS
                $http.post("/product/"+$routeParams.name,data_array)
                .then(function(response) {
                    console.log(response);
                    // data_array = response.config.data;
                        });
                name_product=document.getElementById("name_"+checked_id).innerText;
                price_product=document.getElementById("price_"+checked_id).innerText;
                type_product=$routeParams.name;
                image_product="images/images_ring/images_ring_"+$routeParams.name+"/"+$routeParams.name+"_"+checked_id+".png";
                id_product=document.getElementById("id_sp_"+checked_id).innerText;
                value_product=1;
                price_product_quantity=parseInt(price_product)*parseInt(value_product);
                var check;
                var tam=0;
                if(data_array.length==0) {
                    //add data to array
                    data_array.push({
                        no: data_array.length + 1,
                        image: image_product,
                        id: id_product,
                        type: type_product,
                        name: name_product,
                        value: 1,
                        price: price_product,
                        price_quantity: price_product_quantity
                    });
                }
                else{
                    for(tam;tam<data_array.length;tam++){
                        if(id_product==data_array[tam].id){
                            data_array[tam].value++;
                            check=false;
                            break;
                        }
                        else {
                            check=true;
                        }
                    }
                    if(check==true){
                        data_array.push({
                            no: data_array.length + 1,
                            image: image_product,
                            id: id_product,
                            type: type_product,
                            name: name_product,
                            value: 1,
                            price: price_product,
                            price_quantity: price_product_quantity
                        });
                    }
                }
                displayTable(data_array);
            }

           // funtion remove


    // //     function creat table
            //function add array in table

        }


);//end controller

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
