angular.module('registrationApp').controller('LoginController', ['$scope','LoginService','$location', 'Authentication', function($scope,LoginService,$location,Authentication) { 

  $scope.submit = function() {
    var name = $scope.name;
    var password = $scope.password;

    if(LoginService.isValidUser({name,password})){
      Authentication.setAuthenticated(true);
      $location.path('/storeList');
    }
  };

}]);
