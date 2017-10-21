'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('AddCtrl', function ($scope, $http, $location) {

        var self = this;

        self.data = {
            address: "",
            email: "",
            name: "",
            sex: 0
        };

        $scope.save = function () {
            var url = 'http://127.0.0.1:8080/teachers/save';
            $http.post(url, self.data)
                .then(function () {
                    console.log("success");
                    $location.path("/");
                }, function () {
                    console.log("error");
                })
        }

        $scope.data = self.data;
    });
