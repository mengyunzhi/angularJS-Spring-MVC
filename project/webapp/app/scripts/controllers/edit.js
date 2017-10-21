'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('EditCtrl', function ($scope, $routeParams, edit) {
      console.log($routeParams.id);
      var self = this;
      self.id = $routeParams.id;
      //从后台获取数据根据id
      edit.getOne(self.id, function (data) {
         $scope.data = data;
      });

      self.save = function () {
          edit.save(self.id, $scope.data);
      };

      $scope.save = self.save;
  });
