'use strict';

/**
 * @ngdoc function
 * @name marvelApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelApiApp
 */
angular.module('marvelApiApp').controller('MainCtrl', ['$scope', 'marvelService', '$location', function ($scope, marvelService, $location) {
  $scope.personagens = [];
  $scope.busca = "";

  function init() {
    marvelService.buscarPersonagens().then(res => {
      $scope.personagens = res.data.data.results;
    });
  }

  init();

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.buscarPorNome = function () {
    marvelService.buscarPersonagensPorNome($scope.busca).then(res => {
      $scope.personagens = res.data.data.results;
    });
  };
}]);
