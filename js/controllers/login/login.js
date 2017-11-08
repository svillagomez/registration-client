angular.module('registrationApp').controller('LoginController', ['$scope','LoginService','$location', function($scope,LoginService,$location) { 
  $scope.submit = function() {
    var name = $scope.name;
    var password = $scope.password;

    if(LoginService.isValidUser({name,password})){
      $location.path('/list');
    }

    // console.log('evaluating',LoginService.isValidUser({name,password}));

    // console.log('funcionó el submit', 'name', name, 'city', password);
  };
}]);