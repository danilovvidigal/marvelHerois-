'use strict';

angular.module('marvelApiApp').factory('AuthInterceptor', function () {

  function request(config) {
    config.headers = config.headers || {};

    // Poderia alterar o header aqui enviando um autorization

    return config;
  }

  let service = {
    request: request,
  };

  return service;

}).config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}]);
