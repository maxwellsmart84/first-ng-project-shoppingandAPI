(function() {
  'use strict';

  angular
  .module('Ashley')
  .factory('ShoppingService', function($http){
    var url = "";
    var etsyUrl ="";
    var cartUrl ="";

    var getItems = function (){
      return $http.get(url);
    };

    var postItems = function (item){
      $http.post(url, item);
    };

    var getCartItems = function (){
      return $http.get(cartUrl);
    };

    var postCartItems = function(item){
      $http.post(cartUrl, item);
    };
    return {
      getItems: getItems,
      postitems: postItems,
      getCartItems: getCartItems,
      postCartItems: postCartItems
    };

  });



}());
