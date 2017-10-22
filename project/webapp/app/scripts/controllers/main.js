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
    $scope.data = [
      {
        id: 1,
        name: 'zhangsan',
        sex: 0,
        email: 'zhangsan@mengyunzhi.com',
        username: 'zhangsan'
      },
      {
        id: 2,
        name: 'lisi',
        sex: 1,
        email: 'lisi@mengyunzhi.com',
        username: 'lisi'
      }
    ];
  });
