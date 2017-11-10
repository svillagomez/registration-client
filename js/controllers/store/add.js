angular.module('registrationApp').controller('AddStoreController', ['$scope','StoreService','UserService', function($scope, StoreService,UserService) {

  UserService.userList().then(function(response) {
    $scope.users = response.data;
  });

  $scope.changedValue = function(user) {
    $scope.selectedUser = user;
  }

  $scope.submit = function() {
    var name = $scope.name;
    var ruc = $scope.ruc;
    var city = $scope.city;
    var store = {name,ruc,city,status:true,id: $scope.selectedUser.id};

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
