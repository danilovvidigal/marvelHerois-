'use strict';

angular.module('marvelApiApp').controller('SignInCtrl', ['$scope', 'AuthService', '$location', function ($scope, AuthService, $location) {
  $scope.user = {
    login: '',
    token: ''
  };

  $scope.mensagemErro = null;

  $scope.go = function (path) {
    $location.path(path);
  };

  $scope.efetuarLogin = function () {
    $scope.mensagemErro = null;
    if (AuthService.signin($scope.user)) {
      $location.path('/');
    } else {
      $scope.mensagemErro = 'Usuario e Senha invalidos';
      $scope.user = {};
    }
  };
}]);
