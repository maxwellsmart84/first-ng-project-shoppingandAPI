(function() {
  'use strict';
  angular
  .module("Ashley.shop",[
    'ngRoute',
  ])

  .config (function ($routeProvider){
    $routeProvider
      .when('/shop',{
      templateUrl:'views/shop.html',
      controller:'ShopController as shopCtrl'
    });
  });
}());
