angular.module('storeControllers').controller('AddController', ['$scope','$http', function($scope, $http) {
  

  var data = {
    name: 'Enfermera',
    ruc: '1803891900',
    city: 'Ambato',
    status: true,

  };

  $http({
    method: 'POST',
    url: 'http://localhost:8080/store/add',
    params: data

  }).then(function successCallback(response) {
    console.log('la respuesta del post', response);
    $scope.stores = response.data;
    }, function errorCallback(response) {
      console.log('ERROR:', response);
  });

}]);