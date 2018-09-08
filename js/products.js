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


productApp.controller("profileCtrl", function($scope, $http,$routeParams,$location) {
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
})
productApp.controller("productCtrl", function($scope, $http,$routeParams,$location) {

    $scope.currentPage = 1;
    $scope.pageSize = 12;
    $scope.name_custom = $routeParams.name;
    $http.get('data/ring_' + $routeParams.name + '.json') //reading the product.json file
        .then(function (response) {
            $scope.products = response.data; // binding the data to the $scope variable
        });

    //SHOPPING...........................................................
            var name_product;
            var price_product;
            var type_product;
            var image_product;
            var id_product;
            var value_product;
            var price_product_quantity;
            $scope.add_Cart = function (checked_id) {
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
           // //     function creat table
            if(data_array.length>0) {
                displayTable(data_array);
            }
           else{document.getElementById('show_table').innerHTML="EMPTY CART !!!";}



           function displayTable(table_shopping) {

                document.getElementById('show_table').innerHTML="<table id='table_shopping'><tr><th>No</th><th>Image</th><th>Name</th><th>Id</th><th>Type</th><th>Quantity</th><th>Price/1</th><th>Price/Quantity</th><th>Remove</th></tr></table>";
                var table = document.getElementById('table_shopping');

                var sum=0;
                for (var i = 0; i < table_shopping.length; ++i)
                {   // keep a reference to an individual president object
                    var products = table_shopping[i];

                    // create a row element to append cells to
                    var row = document.createElement('tr');
                    row.id='row_'+(i+1);
                    // properties of the array elements
                    var properties = ['no','image','name','id','type','value', 'price','price_quantity','kien'];

                    // append each one of them to the row in question, in order
                    for (var j = 0; j < properties.length; ++j) {   // create new data cell for names
                        if (j == 1) {
                            var cell = document.createElement('td');
                            var img = document.createElement('img');
                            img.src=products[properties[j]];
                            img.style='height:50px;margin:10px';
                            cell.appendChild(img);
                        }
                        else if(j==5){
                            var cell= document.createElement('td');
                            var input=document.createElement('input');
                            input.setAttribute("onchange","change_quantity(this)");
                            input.id="quantity_no_"+(i+1);
                            input.type ="number";
                            input.style="width:50px";
                            input.min="1";
                            input.max="100";
                            input.value=products[properties[j]];
                            cell.appendChild(input);
                        }
                        else if(j==properties.length-2){
                            var cell = document.createElement('td');
                            cell.id="price_no_"+(i+1);
                            cell.innerHTML = parseInt(products[properties[5]])*parseInt(products[properties[j-1]]);
                            sum+=parseInt(products[properties[5]])*parseInt(products[properties[j-1]]);
                        }
                        else if(j==properties.length-3){
                            var cell = document.createElement('td');
                            cell.id="price_"+(i+1);
                            cell.innerHTML = products[properties[j]];
                        }
                        else if(j==0){
                            var cell = document.createElement('td');
                            cell.id="no_"+(i+1);
                            cell.innerHTML = i+1;
                        }
                        else if(j==properties.length-1){
                            var cell = document.createElement('td');
                            var button = document.createElement('button');
                            var recycle= document.createElement('i');
                            button.className='btn btn-danger btn-sm';
                            button.id=(i+1);
                            button.setAttribute('onclick','remove_product(this.id)');
                            recycle.className='fas fa-trash-alt';
                            button.appendChild(recycle);
                            cell.appendChild(button);
                        }
                        else {
                            var cell = document.createElement('td');
                            cell.innerHTML = products[properties[j]];
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
                        cell.setAttribute('colspan',properties.length-2);
                        cell.setAttribute('style','color:blue');
                        cell.innerHTML="TOTAL";
                        row.appendChild(cell);
                        var cell=document.createElement('td');
                        cell.setAttribute('style','color:blue');
                        cell.setAttribute('id','total');
                        cell.innerHTML=sum;
                        row.appendChild(cell);
                        table.appendChild(row);
                        var cell = document.createElement('td');
                        var button = document.createElement('button');
                        button.className='btn btn-danger btn-sm';
                        button.innerHTML="ALL ";
                        button.setAttribute('onclick','remove_all_product()');
                        button.style='font-weight:600; font-style=both';
                        cell.appendChild(button);
                        row.appendChild(cell);
                        table.appendChild(row);
                    }
                }

            }

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
