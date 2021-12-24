'use strict';

angular.module('marvelApiApp').factory('marvelService', ['$http', function($http){
  let params = {
    apikey: "5a237863b3cc2061003cbbc4fe20dc06",
    ts: "1640300267",
    hash: "62bcf6c33da9e0c890f09264f70760e7",
  };

  function buscarPersonagens(){
    return $http.get('https://gateway.marvel.com:443/v1/public/characters', { params: params });
  }

  function buscarPersonagensPorNome(nome){
    params.nameStartsWith = nome;
    return $http.get('https://gateway.marvel.com:443/v1/public/characters', { params: params });
  }

  function buscarPersonagensPorId(id){
    return $http.get('https://gateway.marvel.com:443/v1/public/characters/' + id, { params: params });
  }


  let service = {
    buscarPersonagens: buscarPersonagens,
    buscarPersonagensPorId: buscarPersonagensPorId,
    buscarPersonagensPorNome: buscarPersonagensPorNome
  };

  return service;

}]);
