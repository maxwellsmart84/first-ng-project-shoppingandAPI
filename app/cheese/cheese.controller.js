(function() {
  'use strict';
  angular
  .module("Ashley.cheese")

  .controller('CheeseController', function($scope, AshleyService){
    var vm = this;

    AshleyService.getCheese().success(function(data){
      var vm = this;
      console.log("thingy", data);
      vm.cheeseData = data.data.children;
      // console.log("test", cheeseData);
    });
  });

}());
