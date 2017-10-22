'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function($scope, $http) {
    var url = 'http://localhost:8080/Constructor/';
    $http.get(url)
    .then(function success(response){
      $scope.data = response.data;
    }, function error(response) {
      console.error('url:' + url, response);
    });
  });
