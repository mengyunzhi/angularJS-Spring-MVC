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
  	$scope.data = {
  		name: '',
  		email: '',
  		sex: '0',
  		username: ''
  	};
    $scope.submit = function() {
    	console.log('submit');
    };
  });
