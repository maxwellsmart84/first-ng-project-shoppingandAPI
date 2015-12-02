(function () {
  "use strict";
  angular
     .module('underscore', [])
     .factory('_', function ($window) {
       return $window._;
     });

  angular
    .module('Ashley', [
    'ngRoute',
    'underscore'
    ])
    .config (function($routeProvider){
      $routeProvider
        .when('/', {
        templateUrl:"views/homePage.html",
        controller: 'MainController as mainCtrl'
        })
        .when('/cheese',{
        templateUrl:'views/cheeselist.html',
        controller:'CheeseController as cheeseCtrl'
        })
        .when('/bear', {
          templateUrl:'views/bearlist.html',
          controller: 'BearController as bearCtrl'
        })
        .when('/bear:bearId', {
          templateUrl:'views/bearshow.html',
          controller: 'BearController as bearCtrl'
        })
        .when('/shop',{
          templateUrl: 'views/shop.html',
          controller: 'ShopController as shopCtrl'
        })
        .when('/funny',{
          templateUrl: 'views/funny.html',
          controller: 'FunnyController as funnyCtrl'
        })
        .when('/404',{
          templateUrl: 'views/404.html'
        })
        .otherwise({redirectTo:'/404'});
      });


})();
