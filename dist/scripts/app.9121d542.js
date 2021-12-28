'use strict';

/**
 * @ngdoc overview
 * @name marvelApiApp
 * @description
 * # marvelApiApp
 *
 * Main module of the application.
 */
angular.module('marvelApiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/signin', {
      templateUrl: 'views/signin.html',
      controller: 'SignInCtrl',
      controllerAs: 'main'
    })
    .when('/signup', {
      templateUrl: 'views/cadastrar.html',
      controller: 'SignUpCtrl',
      controllerAs: 'main'
    })
    .when('/logout', {
      templateUrl: 'views/logout.html',
      controller: 'LogoutCtrl',
      controllerAs: 'main'
    })
    .when('/:id', {
      templateUrl: 'views/detalhe-personagem.html',
      controller: 'DetalheCtrl',
      controllerAs: 'main',
      authorize: true
    })
    .otherwise({
      redirectTo: '/'
    });
}).run(function ($rootScope, $location, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, next) {
    if (next.authorize) {
      if (!AuthService.isLogged()) {
        $rootScope.$evalAsync(function () {
          $location.path('/signin');
        });
      }
    }
  });
});
