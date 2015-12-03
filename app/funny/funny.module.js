(function() {
  'use strict';
  angular
  .module("Ashley.funny",[
    'ngRoute',
  ])

  .config (function ($routeProvider){
    $routeProvider
      .when('/funny',{
      templateUrl:'views/funny.html',
      controller:'FunnyController as funnyCtrl'
    });
  });
}());
