angular.module('storeControllers').controller('ListController', ['$scope','$http', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://localhost:8080/store/all'
  }).then(function successCallback(response) {
    console.log('la respuesta', response);
    $scope.stores = response.data;
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('ERROR:', response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
  });

  // var data = {
  //   name: 'Enfermera',
  //   ruc: '1803891900',
  //   city: 'Ambato',
  //   status: true,

  // };

  // $http({
  //   method: 'POST',
  //   url: 'http://localhost:8080/store/add',
  //   params: data

  // }).then(function successCallback(response) {
  //   console.log('la respuesta del post', response);
  //   $scope.stores = response.data;
  //   }, function errorCallback(response) {
  //     console.log('ERROR:', response);
  // });

}]);