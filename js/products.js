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
        controller : "productCtrl"
    }).when('/checkout',{
        templateUrl : "pages/check_out.html"
    }).otherwise({redirectTo:'/home'});
    // $locationProvider.html5Mode(true);
}]);

productApp.controller("productCtrl", function($scope, $http,$routeParams,$location) {
    $scope.currentPage = 1;
    $scope.pageSize = 12;
    $scope.name_custom = $routeParams.name;
    $http.get('data/ring_' + $routeParams.name + '.json') //reading the product.json file
        .then(function (response) {
            $scope.products = response.data; // binding the data to the $scope variable
            $scope.id = $routeParams.id;
            $scope.image = response.data[$scope.id - 1].image;
            $scope.name_product = response.data[$scope.id - 1].name;
            $scope.sex = response.data[$scope.id - 1].sex;
            $scope.price = response.data[$scope.id - 1].price;
            $scope.price_8 = response.data[$scope.id - 1].price_8;
            $scope.price_9 = response.data[$scope.id - 1].price_9;
            $scope.price_10_5 = response.data[$scope.id - 1].price_10_5;
            $scope.title_info = response.data[$scope.id - 1].title_info;
            $scope.description = response.data[$scope.id - 1].description;
            $scope.Trade_Mark = response.data[$scope.id - 1].trade_mark;
            $scope.Stone = response.data[$scope.id - 1].stone;
            $scope.Color = response.data[$scope.id - 1].color;
            $scope.Shape = response.data[$scope.id - 1].shape;
            $scope.Cara = response.data[$scope.id - 1].cara;
            $scope.Age = response.data[$scope.id - 1].age;
            $scope.Weight = response.data[$scope.id - 1].weight;
        });

    //SHOPPING...........................................................

            var array = [];
            var name_product;
            var price_product;
            var product_type;
            var image_product;
            var no;
            var k=0;
            var check=[];
            var id;
            $scope.add_Cart = function (checked_id) {
                var check_tam=0;

                if(document.getElementById("btn_add_"+ checked_id).style.display=="block") {
                    document.getElementById("btn_add_" + checked_id).style.display = "none";
                    document.getElementById("btn_added_" + checked_id).style.display = "block";
                }
                else{
                    document.getElementById("btn_add_" + checked_id).style.display = "block";
                    document.getElementById("btn_added_" + checked_id).style.display = "none";
                }
                var check_id=true;
                var tam=0;
                check[k] = document.getElementById("id_sp_" + checked_id).innerText;
                name_product = document.getElementById("name_" + checked_id).innerText;
                price_product = document.getElementById("price_" + checked_id).innerText;
                product_type = $routeParams.name;
                id = document.getElementById("id_sp_" + checked_id).innerText;
                image_product = "images/images_ring/images_ring_" + $routeParams.name + "/" + $routeParams.name + "_" + checked_id + ".png";
                no=array.length+1;
                if (k == 0) {
                    array.push({no : no, image: image_product,id:id, type: product_type, name: name_product, price: price_product});
                    alert("Bạn đã chọn " + array.length + " sản phẩm");
                    k++;
                }
                else {
                    for (tam; tam < check.length-1; tam++) {
                        if (check[k] == check[tam]) {
                            check_tam=tam;
                            check_id=false;
                            break;

                        }
                        else {
                            check_id=true;
                        }
                    }
                    if(check_id==true){
                        array.push({
                            no : no,
                            image: image_product,
                            id : id,
                            type: product_type,
                            name: name_product,
                            price: price_product
                        });
                        alert("Bạn đã chọn " + array.length + " sản phẩm");
                        k++;
                    }
                    else {
                        var change_array_1=check_tam;
                        alert("Bạn đã chọn sản phẩm này rồi !!!");
                        for(change_array_1;change_array_1<k;change_array_1++){
                            array[change_array_1]=array[change_array_1+1];
                        }
                        k--;
                        alert(k);
                    }
                }
                no=array.length+1;
            }
           function displayTable(table_shopping) {
                document.getElementById('show_table').innerHTML="<table id='table_shopping'><tr><th>No</th><th>Image</th><th>Name</th><th>Id</th><th>Type</th><th>Price</th></tr></table>";
                var table = document.getElementById('table_shopping');
                var sum=0;
                for (var i = 0; i < table_shopping.length; ++i)
                {   // keep a reference to an individual president object
                    var products = table_shopping[i];

                    // create a row element to append cells to
                    var row = document.createElement('tr');

                    // properties of the array elements
                    var properties = ['no','image','name','type','id', 'price'];

                    // append each one of them to the row in question, in order
                    for (var j = 0; j < properties.length; ++j) {   // create new data cell for names
                        if (j == 1) {
                            var cell = document.createElement('img');
                            cell.setAttribute('src',products[properties[j]]);
                            cell.setAttribute('height','50px');
                            cell.setAttribute('style','margin:10px');
                        }
                        else {
                            var cell = document.createElement('td');
                            cell.innerHTML = products[properties[j]];
                            if (j == properties.length-1) {
                                sum+= parseFloat(products[properties[j]]);
                            }
                        }
                        // set name of property using bracket notation (properties[i] is a string,
                        // which can be used to access properties of president)

                        // add to end of the row
                        row.appendChild(cell);
                    }
                    // add new row to table
                    table.appendChild(row);
                    if(i==table_shopping.length-1){
                        var row = document.createElement('tr');
                        var cell=document.createElement('td');
                        cell.setAttribute('colspan',properties.length-1);
                        cell.setAttribute('style','color:blue');
                        cell.innerHTML="TOTAL";
                        row.appendChild(cell);
                        var cell=document.createElement('td');
                        cell.setAttribute('style','color:blue');
                        cell.innerHTML=sum;
                        row.appendChild(cell);
                        table.appendChild(row);
                    }
                }
            }
            $scope.show_shopping=function(){
                displayTable(array);
            }
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
