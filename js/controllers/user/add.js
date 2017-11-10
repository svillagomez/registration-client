angular.module('registrationApp').controller('AddUserController', ['$scope','$http','UserService', function($scope, $http, UserService) {

  $scope.submit = function() {
    var name = $scope.name;
    var email = $scope.email;
    var city = $scope.city;
    var userName = $scope.userName;
    var password = $scope.password;

    var user = {name, email, city, userName, password, status:true};

    UserService.addUser(user)
    .then(function successCallback(response) {
        $scope.name = '';
        $scope.email = '';
        $scope.city = '';
        $scope.userName = '';
        $scope.password = '';
      }, function errorCallback(response) {
          console.log('ERROR: -->', response.toString());
      }
    );
  }
}]);
