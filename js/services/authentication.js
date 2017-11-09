function Authentication($timeout, $location) {
  var authenticated = false;

  this.setAuthenticated = function setAuthenticated(value) {
    authenticated = value
    $timeout(function() {
      console.log('AUTO logged out!!!');
      authenticated = false;
      $location.path('/login');
    }, 135000);
  }

  this.isAuthenticated = function isAuthenticated() {
    return authenticated
  } 
}

angular.module('registrationApp').service('Authentication', Authentication);