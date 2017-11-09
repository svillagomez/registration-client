var registrationApp = angular.module('registrationApp', [
  'ngRoute',
  'htmlToPdfSave'
]);


registrationApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/login', {
    templateUrl: 'markups/login.html',
  }).
  when('/addStore', {
    templateUrl: 'markups/storeAdd.html',
  }).
  when('/storeList', {
    templateUrl: 'markups/storeList.html',
  }).
  otherwise({
    redirectTo: '/login'
  })
}]);

registrationApp.run(['$rootScope', '$location', 'Authentication', '$timeout', function($rootScope, $location, Authentication, $timeout) {
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
    var isLogged = Authentication.isAuthenticated();
    if(!isLogged){
      $location.path('/login');
    }
  });
}]);