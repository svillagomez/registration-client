angular.module('registrationApp').controller('ListController', ['$scope','$http','StoreService','Authentication', function($scope, $http, StoreService, Authentication) {

  StoreService.storeList().then(function(response) {
    $scope.stores = response.data;
  });
}]);
