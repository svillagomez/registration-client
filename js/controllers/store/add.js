angular.module('registrationApp').controller('AddController', ['$scope','$http','StoreService', function($scope, $http, StoreService) {

  $scope.submit = function() {
    var name = $scope.name;
    var ruc = $scope.ruc;
    var city = $scope.city;
    var store = {name,ruc,city,status:true};

    StoreService.addStore(store)
    .then(function successCallback(response) {
        $scope.name = '';
        $scope.ruc = '';
        $scope.city = '';
      }, function errorCallback(response) {
          console.log('ERROR: -->', response.toString());
      }
    );
  }
}]);
