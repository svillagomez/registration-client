function StoreService($http) {
  this.storeList = function storeList(){
    return $http({
      method: 'GET',
      url: 'http://localhost:8080/store/all'
    });
  };

  this.addStore = function addStore(store){
    // store param must have sructure as follows:
    // var store = {
    //   name: 'aStoreName',
    //   ruc: '9998765432',
    //   city: 'Ambato',
    //   status: true,
    // };

    return $http({
      method: 'POST',
      url: 'http://localhost:8080/store/add',
      params: store
    });
  };
}

angular.module('registrationApp').service('StoreService',StoreService);