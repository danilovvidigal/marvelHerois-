'use strict';

/**
 * @ngdoc overview
 * @name marvelApiApp
 * @description
 * # marvelApiApp
 *
 * Main module of the application.
 */
angular
  .module('marvelApiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:id', {
        templateUrl: 'views/detalhe-personagem.html',
        controller: 'DetalheCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
