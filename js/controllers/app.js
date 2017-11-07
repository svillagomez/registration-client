var registrationApp = angular.module('registrationApp', [
  'ngRoute',
  'storeControllers'
]);


registrationApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'markups/storeList.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/list'
  })
}]);