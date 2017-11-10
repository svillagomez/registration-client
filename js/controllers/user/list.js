angular.module('registrationApp').controller('UserListController', ['$scope','UserService','Authentication', function($scope, UserService, Authentication) {

  UserService.userList().then(function(response) {
    $scope.users = response.data;
  });

}]);
