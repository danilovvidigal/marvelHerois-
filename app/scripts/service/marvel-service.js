'use strict';

angular.module('marvelApiApp').factory('marvelService', ['$http', function($http){
  let params = {
    apikey: "5a237863b3cc2061003cbbc4fe20dc06",
    ts: "1640269956",
    hash: "fa182bfdf5df06aea2a53b27960314db"
  };

  function buscarPersonagens(){
    return $http.get('https://gateway.marvel.com:443/v1/public/characters', { params: params });
  }

  function buscarPersonagensPorId(id){
    return $http.get('https://gateway.marvel.com:443/v1/public/characters/' + id, { params: params });
  }


  let service = {
    buscarPersonagens: buscarPersonagens,
    buscarPersonagensPorId: buscarPersonagensPorId
  };

  return service;

}]);
