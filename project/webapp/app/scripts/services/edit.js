'use strict';

/**
 * @ngdoc service
 * @name webappApp.edit
 * @description
 * # edit
 * Service in the webappApp.
 */
angular.module('webappApp')
  .service('edit', function ($http) {
      var self = this;
      self.getOne = function (id, callback) {
          var url = "http://127.0.0.1:8080/teachers/getOne/" + id;
          $http.get(url)
              .then(function (response) {
                  console.log(response.data);
                  callback(response.data);
              }, function (response) {
                  console.log(response.status);
              })
      };

      self.save = function (id, data) {
          var url = "http://127.0.0.1:8080/teachers/" + id;
          $http.put(url, data)
              .then(function (response) {
                  console.log(response.data);
                  callback(response.data);
              }, function (response) {
                  console.log(response.status);
              })
      };

      return {
          getOne: self.getOne
      }
  });
