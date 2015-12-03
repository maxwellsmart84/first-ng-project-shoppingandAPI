(function() {
  'use strict';
  angular
  .module("Ashley.bear",[
    'ngRoute',
  ])

  .config (function ($routeProvider){
    $routeProvider
    .when('/bear', {
      templateUrl:'views/bearlist.html',
      controller: 'BearController as bearCtrl'
    })
    .when('/bear:bearId', {
      templateUrl:'views/bearshow.html',
      controller: 'BearController as bearCtrl'
    });
  });
}());
