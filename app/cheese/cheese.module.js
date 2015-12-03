(function() {
  'use strict';
    angular
    .module ('Ashley.cheese', [
      'ngRoute',
    ])
    .config (function ($routeProvider){
      $routeProvider
        .when('/cheese',{
        templateUrl:'views/cheese.html',
        controller:'CheeseController as cheeseCtrl'
      });
    });
}());
