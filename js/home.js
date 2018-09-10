// BEST SELLER
productApp.controller("myCtrl",function($scope,$http) {
    $http.get('./data/best_sell/sell_hair.json')
        .then(function(response) {
        $scope.hairhome = response.data;
    });
    $http.get('./data/best_sell/sell_skin.json')
        .then(function(response) {
        $scope.skinshome = response.data;
    });    
    $http.get('./data/best_sell/sell_makeup.json')
        .then(function(response) {
        $scope.makeuphome = response.data;
    });
    $http.get('./data/best_sell/sell_nails.json')
        .then(function(response) {
        $scope.nailshome = response.data;
    });
    $http.get('./data/best_sell/sell_jewellry.json')
        .then(function(response) {
        $scope.jewellryhome = response.data;
    });
    $http.get('./data/best_sell/sell_wedding.json')
        .then(function(response) {
        $scope.weddinghome = response.data;
    });
});