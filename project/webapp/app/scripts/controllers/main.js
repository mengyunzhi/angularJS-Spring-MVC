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
    var success = function(response) {
      $scope.helloWorld = response.data;
      $scope.hi = $scope.helloWorld + ' Hi!';
    };

    var error = function(response) {
      console.error('$http -> ' + url + ' error.', response);
    };

    var url = 'http://localhost:9000/data/helloWorld.txt';
    $http.get(url)
      .then(success, error);

    var thenTest = function(successCallback, errorCallback) {
      var successHello = 'hello success callback';
      var errorHello = 'hello error callback';
      successCallback(successHello);
      errorCallback(errorHello);
    };


    thenTest(function success(hello) {
      console.info('sucess recive hello:', hello);
    }, function error(hello) {
      console.info('error revice hello: ', hello);
    });
  });
