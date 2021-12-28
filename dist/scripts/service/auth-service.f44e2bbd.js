'use strict';

angular.module('marvelApiApp').factory('AuthService', ['$window', function ($window) {

      function signin(user) {
        return $window.localStorage.token === user.token && $window.localStorage.login === user.login;
      }

      function signUp(user) {
        $window.localStorage.nome = user.nome;
        $window.localStorage.token = user.token;
        $window.localStorage.login = user.login;
      }

      function isLogged() {
        return $window.localStorage.login;
      }

      function retornaUsuarioLogado() {
        return $window.localStorage.nome;
      }

      function logoutSistem() {
        delete $window.localStorage.nome;
        delete $window.localStorage.token;
        delete $window.localStorage.login;
      }

  let service = {
    signin: signin,
    signUp: signUp,
    isLogged: isLogged,
    retornaUsuarioLogado: retornaUsuarioLogado,
    logoutSistem: logoutSistem
  };

  return service;
}]);
