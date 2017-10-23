'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AboutCtrl', function($scope) {
    $scope.object = {
      id: 1,
      name: 'zhangsan',
      email: 'zhangsan@mengyunzhi.com',
      sex: 0,
      username: 'zhangsan'
    };
  });
