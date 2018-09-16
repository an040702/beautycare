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
//Route config
productApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$routeProvider.when('/home/:name',{
		templateUrl : "./pages/home.html",
		controller:"productCtrl"
	}).when('/product/:name',{
		templateUrl : "./pages/product.html",
        controller:"productCtrl"
	}).when('/profile/:name/:id',{
		templateUrl : "pages/profile_ring.html",
		controller : "productCtrl"
	}).when('/checkout',{
		templateUrl : "pages/check_out.html",
		controller : "productCtrl"
	}).when('/about-us',{
		templateUrl : "./pages/_about_us.html"
	}).when('/contact-us',{
		templateUrl : "./pages/_contact.html"
	}).otherwise({
		redirectTo:'/home/index',
		controller : "productCtrl"
	});
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
	//Show table function


//DO NOT TOUCH DO NOT TOUCH
//DO NOT TOUCH DO NOT TOUCH//DO NOT TOUCH DO NOT TOUCH
//DO NOT TOUCH DO NOT TOUCH

// (ENG)//DO NOT TOUCH DO NOT TOUCH
// //DO NOT TOUCH DO NOT TOUCH//DO NOT TOUCH DO NOT TOUCH
// //DO NOT TOUCH DO NOT TOUCH
//
// // (ENG)

// không thằng nào được đụng vào đây login chưa làm xong(VIE)
// "NO ONE TOUCHED" (ENG)

// không thằng nào được đụng vào đây login chưa làm xong(VIE)
// "NO ONE TOUCHED" (ENG)

// không thằng nào được đụng vào đây login chưa làm xong(VIE)
// "NO ONE TOUCHED" (ENG)

productApp.controller("productCtrl", function($scope, $http,$routeParams,$compile,$timeout) {

        var vm = $scope;
        vm.currentPage = 1;
        vm.pageSize = 12;
        vm.name_custom = $routeParams.name;
        vm.products;
        if ($routeParams.name == "index") {
            $http.get('data/best_sell/sell_hair.json') //reading the product.json file
                .then(function (response) {
                    vm.products = response.data;
                });
            vm.bs_ring = function (even) {
                $http.get('data/best_sell/' + event.target.id + '.json') //reading the product.json file
                    .then(function (response) {
                        vm.products = response.data;
                    });
            };
        }


        vm.show_shopping = function () {
            return true;
        };

        //Check route if route product page or not
        if (typeof $routeParams.name !== "undefined") {
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
                    vm.class_rating_star = response.data[vm.id - 1].class_rating_star;
                    vm.id_product = response.data[vm.id - 1].id;

                });
        }
            vm.abc = function () {
            	alert("kien");
                $http.get('data/ring_' + $routeParams.name + '.json') //reading the product.json file
                    .then(function (response) {
                        var data_search = [];
                        var show_data = [];
                        var search = document.getElementById("search_name_product").value;
                        for (var i = 0; i < response.data.length; i++) {
                            var tam = 0;
                            var dem = 0;
                            var check_tam = true;
                            for (var j = 0; j < search.length; j++) {
                                var check = false;
                                for (var k = tam; k < response.data[i].name.length; k++) {
                                    if (search[j].toUpperCase() == response.data[i].name[k]) {
                                        check = true;
                                        tam = k + 1;
                                        dem++;
                                        break;
                                    }
                                    else {
                                        check = false;
                                    }
                                    ;
                                    if (dem >= 1 && check == false) {
                                        check_tam = false;
                                        break;
                                    }
                                }
                                if (check == false) {
                                    check_tam = false;
                                    break;
                                }
                            }
                            if (search.length == 1) {
                                if (check == true) {
                                    data_search.push({
                                        here: i
                                    });
                                }
                            }
                            if (check_tam == true && search.length > 1) {
                                data_search.push({
                                    here: i
                                });
                            }
                        }
                        for (var i = 0; i < data_search.length; i++) {
                            show_data[i]=response.data[data_search[i].here];
                        }
                        vm.products = show_data;
                        console.log(vm.products);
                    })
            };
        $http.get('data/data_users.json') //reading the product.json file
            .then(function (response) {
                    for (var i = 0; i < response.data.length; i++) {
                        data_users.push({
                            username: response.data[i].username,
                            password: response.data[i].password,
                            name: response.data[i].name,
                            sex: response.data[i].sex,
                            birthday: response.data[i].birthday,
                            nickname: response.data[i].nickname,
                            address: response.data[i].address,
                            telephone: response.data[i].telephone
                        });
                    }
                }
            );

        vm.name;
        vm.sex;
        if (localStorage.check_login == "true") {
            $http.get('data/data_users.json') //reading the product.json file
                .then(function (response) {
                    vm.name = response.data[localStorage.id_user_login].nickname;
                    vm.sex = response.data[localStorage.id_user_login].sex;
                    if (vm.sex == 'male') {
                        document.getElementById("icon_user_female").style.display = "none";
                        document.getElementById("icon_user_male").style.display = "block";
                        document.getElementById("admin").style.display = "none";
                    }
                    if (vm.name == "Gosu" && vm.sex == 'male') {

                        document.getElementById("icon_user_female").style.display = "none";
                        document.getElementById("icon_user_male").style.display = "none";
                        document.getElementById("admin").style.display = "block";
                    }
                    else if (vm.sex == 'female') {
                        document.getElementById("icon_user_female").style.display = "block";
                        document.getElementById("icon_user_male").style.display = "none";
                        document.getElementById("admin").style.display = "none";

                    }
                });

            document.getElementById("login_navbar").style.display = "none";
            document.getElementById("logout_navbar").style.display = "block";

        }
        else if (localStorage.check_login == "false") {
            document.getElementById("admin").style.display = "none";
            document.getElementById("icon_user_female").style.display = "none";
            document.getElementById("icon_user_male").style.display = "none";
            document.getElementById("login_navbar").style.display = "block";
            document.getElementById("logout_navbar").style.display = "none";
        }

        var check_required = true;
        vm.check_username = function () {
            var username = document.getElementById('email').value;
            for (var i = 0; i < data_users.length; i++) {
                if (username == data_users[i].username) {
                    document.getElementById('warning_username').style.display = 'block';
                    break;
                }
                else {
                    document.getElementById('warning_username').style.display = 'none';
                }
            }
        };
        vm.check_pass = function () {
            var pass = document.getElementById('password').value;
            if (pass.length < 6) {
                document.getElementById('warning_password').style.display = 'block';
            }
            else {
                document.getElementById('warning_password').style.display = 'none';
            }
        };
        vm.check_pass_comfim = function () {
            var pass_confim = document.getElementById("password_confirmation").value;
            if (pass_confim != document.getElementById("password").value) {
                document.getElementById('warning_password_confim').style.display = 'block';
            }
            else {
                document.getElementById('warning_password_confim').style.display = 'none';
            }
        };
        vm.check_phone = function () {
            var phone = document.getElementById('telephone_rg').value;
            document.getElementById("warning_digit").style.display = "none";
            document.getElementById("warning_character").style.display = "none";
            document.getElementById("warning_digit_11").style.display = "none";
            for (var i = 0; i < phone.length; i++) {
                var check_phone;
                check_phone = isNaN(phone[i]);
                if (check_phone == true) {
                    check_required = false;
                    break;
                }
            }
            if (check_phone == true) {
                document.getElementById("warning_character").style.display = "block";
                document.getElementById("warning_digit_11").style.display = "none";
                document.getElementById("warning_digit").style.display = "none";
            }
            else {
                if (phone.length < 10) {
                    check_required = false;
                    document.getElementById("warning_digit").style.display = "block";
                }
                else if (phone.length > 11) {
                    check_required = false;
                    document.getElementById("warning_digit_11").style.display = "block";
                }
                else {
                    check_required = true;
                    document.getElementById("warning_digit").style.display = "none";
                }
                document.getElementById("warning_character").style.display = "none";
            }

        };
        //    function register
        vm.regis = function () {
            var phone = document.getElementById('telephone_rg').value;
            if (phone.length == 0) {
                check_required = false;
            }
            if (check_required == false) {
                alert(document.getElementById('bday').value);
                shakeModals_phone();
            }
            else {
                var username = document.getElementById('email').value;
                var password = document.getElementById('password').value;
                var password_confim = document.getElementById('password_confirmation').value;
                var nickname = document.getElementById('nick_name').value;
                var telephone = document.getElementById('telephone_rg').value;
                var address = document.getElementById('add_rg').value;
                var birthday = document.getElementById('bday').value;
                var sex;
                var name = document.getElementById("name_rg").value;
                var sexs = document.getElementsByName('Sex');
                for (var i = 0; i < sexs.length; i++) {
                    if (sexs[i].checked) {
                        sex = sexs[i].value;
                    }
                }
                var check_username = true;
                for (var i = 0; i < data_users.length; i++) {
                    if (data_users[i].username == username) {
                        check_username = false;
                        break;
                    }
                }

                if (check_username == false) {
                    shakeModals_username();
                }
                if (check_username == true) {
                    if (password != password_confim) {
                        shakeModals();
                    }

                    else if (password_confim == '' || username == '' || password == '' || nickname == '') {
                        empty();
                    }
                    else {
                        data_users.push({
                            username: username,
                            password: password,
                            name: name,
                            sex: sex,
                            nickname: nickname,
                            birthday: birthday,
                            address: address,
                            telephone: telephone

                        });
                        alert("Registed !!!");

                        $http.post(path, data_users)
                            .then(function (response) {
                                console.log(response);
                                // data_array = response.config.data;
                            });
                        // alert($routeParams.name);
                        window.history.go();
                    }
                }
                console.log(data_users);
            }
        };
        //login


        vm.logout = function () {
            localStorage.check_login = "false";
            document.getElementById("login_navbar").style.display = "block";
            document.getElementById("logout_navbar").style.display = "none";
            document.getElementById("admin").style.display = "none";
            document.getElementById("icon_user_female").style.display = "none";
            document.getElementById("icon_user_male").style.display = "none";
            data_array.splice(0, data_array.length);
            $http.post("/product/" + $routeParams.name, data_array)
                .then(function (response) {
                    data_array = response.config.data;
                    console.log(data_array);
                });
            vm.displayTable(data_array);
            document.getElementById('show_table').innerHTML = "EMPTY CART !!!";
            document.getElementById('show_table1').innerHTML = "EMPTY CART !!!";
        };

        // GET and bind data_array from user.json
        $http.get('data/user.json') //reading the user.json file
            .then(function (response) {
                data_array = response.data; // binding the data to the vm variable
                if (data_array.length == 0) {
                    document.getElementById('show_table').innerHTML = "EMPTY CART !!!";
                }
                else {
                    vm.displayTable(data_array, 'table_shopping');
                }
            });

        //thay doi bang checkout
        vm.changetable = function () {
            document.getElementById('table_shopping').style = 'width: 50%';
            a = document.getElementById('sub');
            b = document.getElementById('show_table');
            a.setAttribute('colspan', '5');
            b.setAttribute('class', 'col-md-7');
            document.getElementById('checkout').remove();
            document.getElementById('hidden').style = 'display:inline';
        };

        //change price when click input

        vm.change_quantity = function (e) {
            $http.post("/product/" + $routeParams.name, data_array)
                .then(function (response) {
                    data_array = response.config.data;
                    console.log(data_array);
                });
            var check_price = 0;
            var sum = 0;
            for (check_price; check_price < data_array.length; check_price++) {
                document.getElementById("price_no_" + (check_price + 1)).innerText = parseInt(data_array[check_price].price) * parseInt(document.getElementById("quantity_no_" + (check_price + 1)).value) + "$";
                data_array[check_price].value = document.getElementById("quantity_no_" + (check_price + 1)).value;
                data_array[check_price].price_quantity = document.getElementById("price_no_" + (check_price + 1)).innerText;
                // =data_array[check_price].no;
                sum += parseInt(data_array[check_price].price_quantity);
            }
            document.getElementById("total").innerText = sum + "$";
        };


        vm.remove_product = function (event) {
            data_array.splice(event.target.id, 1);
            if (typeof $routeParams.name !== "undefined") {
                $http.post("/product/" + $routeParams.name, data_array)
                    .then(function (response) {
                        console.log(response);
                        // data_array = response.config.data;
                    });
            }
            ;
            if (typeof $routeParams.name == "undefined") {
                $http.post('/checkout', data_array)
                    .then(function (response) {
                        console.log(response);
                        // data_array = response.config.data;
                    });
            }
            vm.displayTable(data_array);
            if (data_array.length == 0) {
                document.getElementById('show_table').innerHTML = "EMPTY CART !!!";
                document.getElementById('show_table1').innerHTML = "EMPTY CART !!!";
            }

        };
        vm.remove_all_product = function (event) {

            if (typeof $routeParams.name !== "undefined") {
                data_array.splice(0, data_array.length);
                $http.post("/product/" + $routeParams.name, data_array)
                    .then(function (response) {
                        data_array = response.config.data;
                        console.log(data_array);
                    });
            }
            if (typeof $routeParams.name == "undefined") {
                data_array.splice(0, data_array.length);
                $http.post("/checkout", data_array)
                    .then(function (response) {
                        console.log(response);
                        // data_array = response.config.data;
                    });
            }
            ;
            document.getElementById('show_table').innerHTML = "EMPTY CART !!!";
            document.getElementById('show_table1').innerHTML = "EMPTY CART !!!";
        };


        //add product

        vm.add_Cart = function (checked_id) {
            var name_product;
            var price_product;
            var type_product;
            var image_product;
            var id_product;
            var value_product;
            var price_product_quantity;

            if (localStorage.check_login == "false") {

                openLoginModal();
            }
            else {

                document.getElementById('ul-nav-cart').style = 'display: block';
                $timeout(function () {
                    document.getElementById('ul-nav-cart').style = 'display: hidden';
                }, 2000);
                //POST data_array to NodeJS
                $http.post("/product/" + $routeParams.name, data_array)
                    .then(function (response) {
                        data_array = response.config.data;
                        console.log(data_array);
                    });

                name_product = document.getElementById("name_" + checked_id).innerText;
                price_product = document.getElementById("price_" + $routeParams.name + "_" + checked_id).innerText;
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

            }
        };


        vm.displayTable = function (table_shopping, table_id) {
            console.log(table_shopping.length);
            if (typeof $routeParams.name !== "undefined") {
                document.getElementById('show_table').innerHTML = "<table id='" + table_id + "'><tr><th style='text-align: center !important;'>No</th><th style='text-align: center !important;'>Image</th><th style='text-align: center !important;'>Name</th><th style='text-align: center !important;' id='th_id'>Id</th><th style='text-align: center !important;' id='th_type'>Type</th><th style='text-align: center !important;'>Quantity</th><th style='text-align: center !important;' id='th_price'>Price/1</th><th style='text-align: center !important;'>Price</th><th style='text-align: center !important;' id='th_remove'><button style='font-weight:600; font-style=both' class='btn btn-danger btn-sm' id='remove_all_product'>ALL</button></th></tr></table>";
            }
            else {
                document.getElementById('show_table').innerHTML = "";
                document.getElementById('show_table1').innerHTML = "<table id='" + table_id + "'><tr><th style='text-align: center !important;'>No</th><th style='text-align: center !important;'>Image</th><th style='text-align: center !important;'>Name</th><th style='text-align: center !important;'>Id</th><th style='text-align: center !important;'>Type</th><th style='text-align: center !important;' >Quantity</th><th style='text-align: center !important;'>Price/1</th><th style='text-align: center !important;'>Price/Quantity</th><th style='text-align: center !important;'><button style='font-weight:600; font-style=both' class='btn btn-danger btn-sm' id='remove_all_product'>ALL</button></th></tr></table>";

            }
            var table = document.getElementById(table_id);
            var sum = 0;
            for (var i = 0; i < table_shopping.length; ++i) {   // keep a reference to an individual president object
                var products = table_shopping[i];

                // create a row element to append cells to
                var row = document.createElement('tr');
                row.id = 'row_' + (i + 1);
                // properties of the array elements
                var properties = ['no', 'image', 'name', 'id', 'type', 'value', 'price', 'price_quantity', 'remove'];

                // append each one of them to the row in question, in order
                for (var j = 0; j < properties.length; ++j) {   // create new data cell for names
                    if (j == 1) {
                        var cell = document.createElement('td');
                        var img = document.createElement('img');
                        img.className = "ing-responsive2";
                        img.src = products[properties[j]];
                        img.style = 'max-width: 100px;max-height: 100px';
                        cell.appendChild(img);
                    }
                    else if (j == 5) {
                        var cell = document.createElement('td');
                        var input = document.createElement('input');
                        // input.setAttribute("ng-click","change_quantity(this)");
                        input.id = "quantity_no_" + (i + 1);
                        input.type = "number";
                        input.style = "width:50px";
                        input.min = "1";
                        input.max = "100";
                        input.value = products[properties[j]];
                        cell.appendChild(input);
                    }
                    else if (j == properties.length - 2) {
                        var cell = document.createElement('td');
                        cell.className = "a";
                        cell.id = "price_no_" + (i + 1);
                        cell.innerHTML = parseInt(products[properties[5]]) * parseInt(products[properties[j - 1]]) + "$";
                        sum += parseInt(products[properties[5]]) * parseInt(products[properties[j - 1]]);
                    }
                    else if (j == properties.length - 3) {
                        var cell = document.createElement('td');
                        cell.id = "price_table_" + $routeParams.name + "_" + (i + 1);
                        cell.innerHTML = products[properties[j]];
                    }
                    else if (j == 0) {
                        var cell = document.createElement('td');
                        cell.id = "no_" + (i + 1);
                        cell.innerHTML = i + 1;
                    }
                    else if (j == properties.length - 1) {
                        var cell = document.createElement('td');
                        var button = document.createElement('button');
                        button.innerHTML = "<i class='fas fa-trash-alt'></i>";
                        button.className = 'btn btn-danger btn-sm';
                        button.setAttribute('id', i);
                        cell.appendChild(button);

                    }
                    else if (j == 3) {
                        var cell = document.createElement('td');
                        cell.innerHTML = products[properties[j]];
                        cell.setAttribute('id', 'id_product_' + i);
                    }
                    else if (j == 4) {
                        var cell = document.createElement('td');
                        cell.setAttribute('id', 'type_product_' + i);
                        cell.innerHTML = products[properties[j]];
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
                if (i == table_shopping.length - 1) {
                    var row = document.createElement('tr');
                    var cell = document.createElement('td');
                    cell.setAttribute('colspan', properties.length - 7);
                    cell.setAttribute('style', 'color:blue');
                    cell.innerHTML = "<a class='btn btn-warning'><i class='fa fa-angle-left'></i> Continue Shopping</a>";
                    cell.className = "continue";
                    row.appendChild(cell);
                    table.appendChild(row);
                    var cell = document.createElement('td');
                    if (typeof $routeParams.name !== "undefined") {
                        cell.setAttribute('colspan', properties.length - 7);
                    }
                    else {
                        cell.setAttribute('colspan', properties.length - 4);
                    }
                    cell.setAttribute('style', 'color:black;font-weight:bold;font-size:20px;');
                    cell.innerHTML = "Total";
                    cell.setAttribute('id', 'sub');
                    row.appendChild(cell);
                    table.appendChild(row);
                    var cell = document.createElement('td');
                    cell.setAttribute('style', 'color:red');
                    cell.setAttribute('id', 'total');
                    cell.innerHTML = sum + "$";
                    row.appendChild(cell);
                    var cell = document.createElement('td');
                    cell.setAttribute('id', 'checkout');
                    cell.innerHTML = "<a href='#!/checkout' style='text-decoration: none'><div style='cursor: pointer' class='btn btn-success btn-block'>Check Out <i class='fa fa-angle-right'></i></div></a>";
                    row.appendChild(cell);
                    table.appendChild(row);
                }
            }
            if (data_array.length > 0) {
                var el = document.getElementById('checkout');
                el.setAttribute("ng-click", "changetable()");
                compile(el);
                var el = document.getElementById('remove_all_product');
                el.setAttribute("ng-click", "remove_all_product($event)");
                compile(el);
                for (var i = 0; i < table_shopping.length; i++) {
                    var el = document.getElementById(i);
                    el.setAttribute("data-ng-click", "remove_product($event)");
                    compile(el);
                    var el = document.getElementById("quantity_no_" + (i + 1));
                    el.setAttribute("data-ng-click", "change_quantity($event)");
                    compile(el);
                }
                if (typeof $routeParams.name !== "undefined") {
                    document.getElementById('th_price').style.display = 'none';
                    document.getElementById('th_id').style.display = 'none';
                    document.getElementById('th_type').style.display = 'none';
                    for (var i = 0; i < data_array.length; i++) {
                        document.getElementById('price_table_' + $routeParams.name + "_" + (i + 1)).style.display = 'none';
                        document.getElementById('id_product_' + (i)).style.display = 'none';
                        document.getElementById('type_product_' + (i)).style.display = 'none';
                    }
                }
            }
        };
        // vm.search_name=function () {
		// 	var vm=$scope;
		// 	document.getElementById('show_product_custom').style.display='none';
		// 	document.getElementById("show_product_custom_1").style.display='block';
		// 	$http.get('data/ring_' + $routeParams.name + '.json') //reading the product.json file
		// 		.then(function (response) {
		// 			var data_search = [];
		// 			var show_data = [];
		//
		// 			var search = document.getElementById("search_name_product").value;
		// 			for (var i = 0; i < response.data.length; i++) {
		// 				var tam = 0;
		// 				var dem = 0;
		// 				var check_tam = true;
		// 				for (var j = 0; j < search.length; j++) {
		// 					var check = false;
		// 					for (var k = tam; k < response.data[i].name.length; k++) {
		// 						if (search[j].toUpperCase() == response.data[i].name[k]) {
		// 							check = true;
		// 							tam = k + 1;
		// 							dem++;
		// 							break;
		// 						}
		// 						else {
		// 							check = false;
		// 						}
		// 						;
		// 						if (dem >= 1 && check == false) {
		// 							check_tam = false;
		// 							break;
		// 						}
		// 					}
		// 					if (check == false) {
		// 						check_tam = false;
		// 						break;
		// 					}
		// 				}
		// 				if (search.length == 1) {
		// 					if (check == true) {
		// 						data_search.push({
		// 							here: i
		// 						});
		// 					}
		// 				}
		// 				if (check_tam == true && search.length > 1) {
		// 					data_search.push({
		// 						here: i
		// 					});
		// 				}
		// 			}
		// 			var tamp=0;
		// 			for (var i = 0; i < data_search.length; i++) {
		// 				show_data[i]=response.data[data_search[i].here];
		// 			}
		// 			vm.products_new = show_data;
		// 			console.log(vm.products_new);
        //             if(show_data.length==0){
        //             	document.getElementById('show_product_custom').style.display='block';
		// 			}

					// var el = document.getElementById("products");
					// el.setAttribute( "dir-paginate","product in products | itemsPerPage: pageSize");
					// compile(el);

            // });
	// }

        //compile search
        // if (typeof $routeParams.name !== "undefined") {
        //     var show = document.getElementById("show_product_custom");
        //     show.setAttribute("dir-paginate", "product in products| itemsPerPage: pageSize");
        //     compile(show);
        // }

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


function click() {

	localStorage.check_login="false";
	document.getElementById('show_login_change').innerHTML=localStorage.check_login;
};

