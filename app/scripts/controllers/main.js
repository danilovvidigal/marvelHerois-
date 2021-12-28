'use strict';

angular.module('marvelApiApp').controller('MainCtrl', ['$scope', 'marvelService', '$location', 'AuthService', function ($scope, marvelService, $location, AuthService) {
  $scope.personagens = [];
  $scope.busca = '';
  $scope.usuarioLogado = null;

  function init() {
    marvelService.buscarPersonagens().then(function(res) {
      $scope.personagens = res.data.data.results;
    });

    $scope.usuarioLogado = AuthService.retornaUsuarioLogado();
  }

  init();

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.buscarPorNome = function () {
    marvelService.buscarPersonagensPorNome($scope.busca).then(function(res) {
      $scope.busca = '';
      $scope.personagens = res.data.data.results;
    });
  };
}]);
