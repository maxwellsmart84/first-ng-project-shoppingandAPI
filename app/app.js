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
    'underscore',
   'Ashley.cheese',
   'Ashley.bear',
   'Ashley.funny',
   'Ashley.shop'
    ])
    .config (function($routeProvider){
      $routeProvider
        .when('/', {
        templateUrl:"views/homePage.html",
        controller: 'MainController as mainCtrl'
        })
        .when('/404',{
          templateUrl: 'views/404.html'
        })
        .otherwise({redirectTo:'/404'});
      });


})();
