angular.module('registrationApp').controller('LoginController', ['$scope','LoginService','$location', 'Authentication', '$timeout', function($scope,LoginService,$location,Authentication, $timeout) {

  $scope.showError = false;

  $scope.submit = function() {
    var name = $scope.name;
    var password = $scope.password;

    if(LoginService.isValidUser({name,password})){
      Authentication.setAuthenticated(true);
      $location.path('/storeList');
    } else {
      $scope.showError = true;
      $timeout(function() {
        $scope.showError = false;
      }, 2000);
    }
  };

}]);
