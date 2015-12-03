(function() {
  'use strict';

  angular
  .module('Ashley')

  .controller('ShopController', function(ShopService){
    var vm = this;
    ShopService.getItems().success(function (data){
      console.log('test', data);
      vm.items = data;
      });

    vm.addToItems = function (product){
      ShopService.postItems(product).success(function (data){
      });
    };

    ShopService.getCartItems().success(function(data){
      console.log('test', data);
      vm.cartItems = data;
    });

    vm.addToCart = function (product) {
      ShopService.postItems(product).success(function(data){
      });
    };

  });


}());
