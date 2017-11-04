'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:TeacherCreateCtrl
 * @description
 * # TeacherCreateCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('TeacherCreateCtrl', function($scope, $http) {
    $scope.data = {
      name: '',
      email: '',
      sex: 'false',
      username: ''
    };

    $scope.submit = function() {
      var url = 'http://127.0.0.1:8080/Teacher/';
      $http
        .post(url,$scope.data)
        .then(function() {
        	console.log('success');
        }, function() {
        	console.log('error');
        });
    };

  });
