'use strict';

angular.module('marvelApiApp').controller('SignUpCtrl', ['$scope', 'AuthService', '$location', function ($scope, AuthService, $location) {
  $scope.user = {
    login: '',
    token: '',
    nome: ''
  };

  $scope.go = function (path) {
    $location.path(path);
  };

  $scope.cadastrar = function () {
    AuthService.signUp($scope.user);
    $location.path('/');
  };
}]);
