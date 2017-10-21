'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function($scope) {
    $scope.helloWorld = 'Hello World!';
    $scope.hi = $scope.helloWorld + ' Hi!';
    console.log($scope.helloWorld);
  });
