'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:TeacherCreateCtrl
 * @description
 * # TeacherCreateCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('TeacherCreateCtrl', function($scope) {
    $scope.submit = function() {
    	console.log('submit');
    };
  });
