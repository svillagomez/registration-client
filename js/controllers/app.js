var registrationApp = angular.module('registrationApp', [
  'ngRoute',
]);


registrationApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'markups/login.html',
  }).
  when('/list', {
    templateUrl: 'markups/storeList.html',
  }).
  otherwise({
    redirectTo: '/list'
  })
}]);