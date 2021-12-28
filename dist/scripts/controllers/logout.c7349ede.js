'use strict';

angular.module('marvelApiApp').controller('LogoutCtrl', ['$scope', 'AuthService', '$location', function ($scope, AuthService, $location) {
  $scope.go = function (path) {
    $location.path(path);
  };

  function init() {
    AuthService.logoutSistem();
  }

  init();
}]);
