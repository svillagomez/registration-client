function LoginService($http) {
  this.isValidUser = function isValidUser(user) {
    //call API for users if needed
    return (user.name === 'admin' && user.password === "12345");
  }
}

angular.module('registrationApp').service('LoginService',LoginService);