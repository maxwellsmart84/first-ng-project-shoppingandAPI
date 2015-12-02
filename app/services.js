
(function () {
  "use strict";
  angular
    .module('Ashley')
    .factory('AshleyService', function ($http) {
      var urlCheese = 'https://www.reddit.com/r/cheeseporn.json';
      var urlFunny = 'http://tiny-tiny.herokuapp.com/collections/blakeShelton';
      var urlGirly = '';
      var urlBear = '';

      var getCheese = function () {
        return $http.get(urlCheese);
      };




      return {
        getCheese: getCheese,
      };

    });
})();
