'use strict';

angular.module('marvelApiApp').controller('DetalheCtrl', ['$scope', 'marvelService', '$routeParams', '$location', 'AuthService', function ($scope, marvelService, $routeParams, $location, AuthService) {
  $scope.personagem = [];
  $scope.usuarioLogado = null;

  function init() {
    marvelService.buscarPersonagensPorId($routeParams.id).then(function(res) {
      $scope.personagem = res.data.data.results[0];
    });

    $scope.usuarioLogado = AuthService.retornaUsuarioLogado();
  }

  init();

  $scope.go = function ( path ) {
    $location.path( path );
  };
}]);
