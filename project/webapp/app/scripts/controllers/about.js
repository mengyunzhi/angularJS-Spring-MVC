'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AboutCtrl', function($scope, $http) {
  	var url = 'http://localhost:8080/Teacher/1';
  	$http.get(url)
  	.then(function success(response){
  		$scope.object = response.data;
  	}, function error(response){
  		console.error(url, response);
  	});
  });
