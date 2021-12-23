'use strict';

/**
 * @ngdoc function
 * @name marvelApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelApiApp
 */
angular.module('marvelApiApp').controller('MainCtrl', ['$scope', 'marvelService', function ($scope, marvelService) {
  $scope.personagens = [];

  function init() {
    marvelService.buscarPersonagens().then(res => {
      $scope.personagens = res.data.data.results;
    });
  }

  init();
}]);
