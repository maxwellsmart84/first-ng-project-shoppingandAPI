(function () {


  angular
    .module('Ashley')
    .controller('MainController', function($scope){

    })

    .controller('CheeseController', function($scope, AshleyService){
      AshleyService.getCheese().success(function(data){
        console.log("thingy", data);
        $scope.cheeseData = data.data.children;
        // console.log("test", cheeseData);
      });

    });


})();
