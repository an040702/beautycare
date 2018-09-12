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
productApp.controller('AppController', [function() {
            var vm = this;
            vm.submit = function() {
                console.log('Form is submitted with following user', vm.user);
                alert("Thank you, we look forward to connecting!");
                document.getElementById("myForm").reset();
            };
        }]);        
productApp.controller('OtherController', OtherController);

var data_array=[];
productApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider.when('/home',{
        templateUrl : "./pages/home.html",
        controller:"myCtrl"
    }).when('/product/:name',{
        templateUrl : "./pages/product.html",
        controller : "productCtrl"
    }).when('/profile/:name/:id',{
        templateUrl : "pages/profile_ring.html",
        controller : "productCtrl"
    }).when('/checkout',{
        templateUrl : "pages/check_out.html",
        controller : "productCtrl"
    }).when('/login',{
        templateUrl: (function () {
            window.location=path;
        })
    }).when('/about-us',{
        templateUrl : "./pages/_about_us.html"
    }).when('/contact-us',{
        templateUrl : "./pages/_contact.html"
    }).otherwise({redirectTo:'/home'});
    // $locationProvider.html5Mode(true);
}]);
function compile(element){
    var el = angular.element(element);
    $scope = el.scope();
    $injector = el.injector();
    $injector.invoke(function($compile){
        $compile(el)($scope)
    })
}
var data_users=[];

productApp.controller("loginCtrl", function($scope,$http,$routeParams) {

    var vm=$scope;
    vm.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    //Change check true/false
    vm.changeTF = function () {

    }

    //Check route if route product page or not
        $http.get('data/data_users.json') //reading the product.json file
            .then(function (response) {
                    vm.products = response.data;
                    for(var i=0;i<response.data.length;i++) {
                        data_users.push({
                            username: response.data[i].username,
                            password: response.data[i].password,
                            check_login: response.data[i].check
                        });
                    }
            }
            );
    //    function register
    vm.regis=function () {
        var username=document.getElementById('email').value;
        var password=document.getElementById('password').value;
        var password_confim=document.getElementById('password_confirmation').value;

        if(password!=password_confim){
            shakeModals();
        }

        else if(password_confim==''&&username==''&&password==''){
            empty();
        }

        else{
            var email=document.getElementById('email').value;
            var password=document.getElementById('password').value;
            data_users.push({
                username: email,
                password: password

            });
            alert("Registed !!!");
            $http.post(path,data_users)
              .then(function(response) {
                  console.log(response);
                  // data_array = response.config.data;
              });
            // alert($routeParams.name);
            window.history.go();
        };

        console.log(data_users);
    }
});

productApp.controller("productCtrl", function($scope, $http,$routeParams,$compile,$timeout) {
    var vm=$scope;
    vm.currentPage = 1;
    vm.pageSize = 12;
    vm.name_custom = $routeParams.name;
    vm.show_shopping=function(){
        return true;
    };
    //Check route if route product page or not
    if(typeof $routeParams.name !== "undefined") {
        $http.get('data/ring_' + $routeParams.name + '.json') //reading the product.json file
        .then(function (response) {
            vm.products = response.data; // binding the data to the vm variable
            vm.id = $routeParams.id;
            vm.image = response.data[vm.id - 1].image;
            vm.name_product = response.data[vm.id - 1].name;
            vm.sex = response.data[vm.id - 1].sex;
            vm.price = response.data[vm.id - 1].price;
            vm.title_info = response.data[vm.id - 1].title_info;
            vm.description = response.data[vm.id - 1].description;
            vm.Trade_Mark = response.data[vm.id - 1].trade_mark;
            vm.Stone = response.data[vm.id - 1].stone;
            vm.Color = response.data[vm.id - 1].color;
            vm.Shape = response.data[vm.id - 1].shape;
            vm.Cara = response.data[vm.id - 1].cara;
            vm.Age = response.data[vm.id - 1].age;
            vm.Weight = response.data[vm.id - 1].weight;
            vm.class_rating_star=response.data[vm.id-1].class_rating_star;
            vm.id_product=response.data[vm.id-1].id;
        });
    }

    // GET and bind data_array from user.json
    $http.get('data/user.json') //reading the user.json file
        .then(function (response) {
            data_array = response.data; // binding the data to the vm variable
            if(data_array.length==0){
                document.getElementById('show_table').innerHTML="EMPTY CART !!!";
            }
            else {
                vm.displayTable(data_array,'table_shopping');
            }
        });

    //thay doi bang checkout
    vm.changetable=function(){
        document.getElementById('table_shopping').style='width: 50%';
        a=document.getElementById('sub');
        b=document.getElementById('show_table');
        a.setAttribute('colspan','5');
        b.setAttribute('class','col-md-7');
        document.getElementById('checkout').remove();
        document.getElementById('hidden').style='display:inline';
    };

    //change price when click input

    vm.change_quantity=function(e) {
        $http.post("/product/" + $routeParams.name, data_array)
            .then(function (response) {
                data_array = response.config.data;
                console.log(data_array);
            });
        var check_price=0;
        var sum=0;
        for(check_price;check_price<data_array.length;check_price++){
            document.getElementById("price_no_"+(check_price+1)).innerText=parseInt(data_array[check_price].price)*parseInt(document.getElementById("quantity_no_"+(check_price+1)).value) +"$";
            data_array[check_price].value=document.getElementById("quantity_no_"+(check_price+1)).value;
            data_array[check_price].price_quantity=document.getElementById("price_no_"+(check_price+1)).innerText;
            // =data_array[check_price].no;
            sum+=parseInt(data_array[check_price].price_quantity);
        }
        document.getElementById("total").innerText=sum +"$";
    };
            var name_product;
            var price_product;
            var type_product;
            var image_product;
            var id_product;
            var value_product;
            var price_product_quantity;
            vm.remove_product=function(event) {
                data_array.splice(event.target.id,1);
                if(data_array.length==0){
                    document.getElementById('show_table').innerHTML="EMPTY CART !!!";
                    document.getElementById('show_table1').innerHTML="EMPTY CART !!!";
                }
                else {
                    vm.displayTable(data_array,'table_shopping');
                };
                if(typeof $routeParams.name !== "undefined"){
                    $http.post("/product/"+$routeParams.name,data_array)
                        .then(function(response) {
                            console.log(response);
                            // data_array = response.config.data;
                        });
                };
                if(typeof $routeParams.name == "undefined"){
                    $http.post('/checkout',data_array)
                        .then(function(response) {
                            console.log(response);
                            // data_array = response.config.data;
                        });
                }
            };
            vm.remove_all_product=function(event) {
                data_array.splice(0,data_array.length);
                document.getElementById('show_table').innerHTML="EMPTY CART !!!";
                document.getElementById('show_table1').innerHTML="EMPTY CART !!!";
                if(typeof $routeParams.name !== "undefined"){
                    $http.post("/product/"+$routeParams.name,data_array)
                        .then(function(response) {
                            console.log(response);
                            // data_array = response.config.data;
                        });
                }
                else if(typeof $routeParams.name == "undefined"){
                    $http.post("/checkout",data_array)
                        .then(function(response) {
                            console.log(response);
                            // data_array = response.config.data;
                        });
                };
            };


            //add product

            vm.add_Cart = function (checked_id) {
                document.getElementById('ul-nav-cart').style='display: block';
                $timeout(function() {
                   document.getElementById('ul-nav-cart').style='display: hidden';
                }, 2000);                
                //POST data_array to NodeJS
                $http.post("/product/" + $routeParams.name, data_array)
                    .then(function (response) {
                        data_array = response.config.data;
                        console.log(data_array);
                    });
                name_product = document.getElementById("name_" + checked_id).innerText;
                price_product = document.getElementById("price_" + checked_id).innerText;
                type_product = $routeParams.name;
                image_product = "images/images_ring/images_ring_" + $routeParams.name + "/" + $routeParams.name + "_" + checked_id + ".png";
                id_product = document.getElementById("id_sp_" + checked_id).innerText;
                value_product = 1;
                price_product_quantity = parseInt(price_product) * parseInt(value_product);
                var check;
                var tam = 0;
                if (data_array.length == 0) {
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
                else {
                    for (tam; tam < data_array.length; tam++) {
                        if (id_product == data_array[tam].id) {
                            data_array[tam].value++;
                            check = false;
                            break;
                        }
                        else {
                            check = true;
                        }
                    }
                    if (check == true) {
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
                vm.displayTable(data_array);
                console.log(data_array);

            };



            vm.displayTable=function (table_shopping,table_id) {
                console.log(table_shopping.length);
                    if(typeof $routeParams.name !== "undefined") {
                        document.getElementById('show_table').innerHTML="<table id='"+table_id+"'><tr><th style='text-align: center !important;'>No</th><th style='text-align: center !important;'>Image</th><th style='text-align: center !important;'>Name</th><th style='text-align: center !important;' id='th_id'>Id</th><th style='text-align: center !important;' id='th_type'>Type</th><th style='text-align: center !important;'>Quantity</th><th style='text-align: center !important;' id='th_price'>Price/1</th><th style='text-align: center !important;'>Price</th><th style='text-align: center !important;' id='th_remove'><button style='font-weight:600; font-style=both' class='btn btn-danger btn-sm' id='remove_all_product'>ALL</button></th></tr></table>";
                    }
                    else {
                            document.getElementById('show_table').innerHTML = "";
                            document.getElementById('show_table1').innerHTML = "<table id='" + table_id + "'><tr><th style='text-align: center !important;'>No</th><th style='text-align: center !important;'>Image</th><th style='text-align: center !important;'>Name</th><th style='text-align: center !important;'>Id</th><th style='text-align: center !important;'>Type</th><th style='text-align: center !important;' >Quantity</th><th style='text-align: center !important;'>Price/1</th><th style='text-align: center !important;'>Price/Quantity</th><th style='text-align: center !important;'><button style='font-weight:600; font-style=both' class='btn btn-danger btn-sm' id='remove_all_product'>ALL</button></th></tr></table>";

                    }
                    var table = document.getElementById(table_id);
                    var sum=0;
                    for (var i = 0; i < table_shopping.length; ++i)
                    {   // keep a reference to an individual president object
                        var products = table_shopping[i];

                        // create a row element to append cells to
                        var row = document.createElement('tr');
                        row.id='row_'+(i+1);
                        // properties of the array elements
                        var properties = ['no','image','name','id','type','value', 'price','price_quantity','remove'];

                        // append each one of them to the row in question, in order
                        for (var j = 0; j < properties.length; ++j) {   // create new data cell for names
                            if (j == 1) {
                                var cell = document.createElement('td');
                                var img = document.createElement('img');
                                img.className="ing-responsive2";
                                img.src=products[properties[j]];
                                img.style='max-width: 100px;max-height: 100px';
                                cell.appendChild(img);
                            }
                            else if(j==5){
                                var cell= document.createElement('td');
                                var input=document.createElement('input');
                                // input.setAttribute("ng-click","change_quantity(this)");
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
                                cell.className="a";
                                cell.id="price_no_"+(i+1);
                                cell.innerHTML = parseInt(products[properties[5]])*parseInt(products[properties[j-1]])+ "$";
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
                                button.innerHTML="<i class='fas fa-trash-alt'></i>";
                                button.className='btn btn-danger btn-sm';
                                button.setAttribute('id',i);
                                cell.appendChild(button);

                            }
                            else if(j==3){
                                var cell = document.createElement('td');
                                cell.innerHTML = products[properties[j]];
                                cell.setAttribute('id','id_product_'+i);
                            }
                            else if(j==4){
                                var cell = document.createElement('td');
                                cell.setAttribute('id','type_product_'+i);
                                cell.innerHTML = products[properties[j]];
                            }
                            else{
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
                            cell.setAttribute('colspan',properties.length-7);
                            cell.setAttribute('style','color:blue');
                            cell.innerHTML="<a class='btn btn-warning'><i class='fa fa-angle-left'></i> Continue Shopping</a>";
                            cell.className="continue";
                            row.appendChild(cell);
                            table.appendChild(row);
                            var cell=document.createElement('td');
                            if(typeof $routeParams.name !== "undefined") {
                                cell.setAttribute('colspan',properties.length-7);
                            }
                            else{
                                cell.setAttribute('colspan',properties.length-4);
                            }
                            cell.setAttribute('style','color:black;font-weight:bold;font-size:20px;');
                            cell.innerHTML="Total";
                            cell.setAttribute('id','sub');
                            row.appendChild(cell);
                            table.appendChild(row);
                            var cell=document.createElement('td');
                            cell.setAttribute('style','color:red');
                            cell.setAttribute('id','total');
                            cell.innerHTML=sum +"$";
                            row.appendChild(cell);
                            var cell=document.createElement('td');
                            cell.setAttribute('id','checkout');
                            cell.innerHTML="<a href='#!/checkout' style='text-decoration: none'><div style='cursor: pointer' class='btn btn-success btn-block'>Check Out <i class='fa fa-angle-right'></i></div></a>";
                            row.appendChild(cell);
                            table.appendChild(row);
                        }
                    }
                    if(data_array.length>0){
                        var el = document.getElementById('checkout');
                        el.setAttribute("ng-click", "changetable()");
                        compile(el);
                        var el = document.getElementById('remove_all_product');
                        el.setAttribute("ng-click", "remove_all_product($event)");
                        compile(el);
                        for(var i=0;i<table_shopping.length;i++){
                            var el = document.getElementById(i);
                            el.setAttribute("data-ng-click", "remove_product($event)");
                            compile(el);
                            var el = document.getElementById("quantity_no_"+(i+1));
                            el.setAttribute("data-ng-click", "change_quantity($event)");
                            compile(el);
                        }
                        if(typeof $routeParams.name !== "undefined") {
                            document.getElementById('th_price').style.display='none';
                            document.getElementById('th_id').style.display='none';
                            document.getElementById('th_type').style.display='none';
                            for (var i=0;i<data_array.length;i++) {
                                document.getElementById('price_'+(i+1)).style.display='none';
                                document.getElementById('id_product_'+(i)).style.display='none';
                                document.getElementById('type_product_'+(i)).style.display='none';
                            }
                        }
                    }
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

productApp.controller("trueFalseCtrl", function($scope, $http,$routeParams,$compile,$timeout) {
    var true_false = $scope;
    var displayDiv = false;
    console.log(true_false.displayDiv);
    true_false.displayDiv = localStorage.saveTF;
    //Function change true/false
    true_false.changeTF = function(){
        console.log(true_false.displayDiv);
        true_false.displayDiv = !true_false.displayDiv;
        localStorage.saveTF = true_false.displayDiv;
    }
    
});