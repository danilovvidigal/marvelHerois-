'use strict';

/**
 * @ngdoc function
 * @name marvelApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelApiApp
 */
angular.module('marvelApiApp').controller('DetalheCtrl', ['$scope', 'marvelService', '$routeParams', '$location', function ($scope, marvelService, $routeParams, $location) {
  $scope.personagem = [];

  function init() {
    marvelService.buscarPersonagensPorId($routeParams.id).then(res => {
      $scope.personagem = res.data.data.results[0];
    });
  }

  init();

  $scope.go = function ( path ) {
    $location.path( path );
  };
}]);
