function UserService($http) {
  this.userList = function userList(){
    return $http({
      method: 'GET',
      url: 'http://localhost:8080/user/all'
    });
  };

  this.addUser = function addUser(user){
    // user param must have sructure as follows:
    // var user = {
    //   name: 'aStoreName',
    //   email: '9998765432',
    //   city: 'Ambato',
    //   username: 'aUserName',
    //   password: 'aPassword',
    //   status: true,
    // };

    return $http({
      method: 'POST',
      url: 'http://localhost:8080/user/add',
      params: user
    });
  };
}

angular.module('registrationApp').service('UserService',UserService);