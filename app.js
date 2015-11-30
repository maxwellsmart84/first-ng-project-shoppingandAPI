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
        controller: 'MainController'
        })
        .when('/cheese',{
        templateUrl:'views/cheeselist.html',
        controller:'CheeseController'
        })
        .when('/bear', {
          templateUrl:'views/bearlist.html',
          controller: 'BearController'
        })
        .when('/bear:bearId', {
          templateUrl:'views/bearshow.html',
          controller: 'BearController'
        })
        .when('/girly',{
          templateUrl: 'views/girly.html',
          controller: 'GirlyController'
        })
        .when('/funny',{
          templateUrl: 'views/funny.html',
          controller: 'FunnyController'
        })
        .when('/404',{
          templateUrl: 'views/404.html'
        })
        .otherwise({redirectTo:'/404'});
      });


})();
