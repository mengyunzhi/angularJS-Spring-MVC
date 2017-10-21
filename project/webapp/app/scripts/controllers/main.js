'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('MainCtrl', function ($scope, $http) {

        var self = this;

        self.init = function () {
            var url = 'http://127.0.0.1:8080/teachers/getAll';
            console.log("0");
            $http.get(url)
                .then(function success (response) {
                $scope.teachers = response.data;
                console.log(response.data);
                console.log('success');
                }, function error (response) {
                    console.log('error');
                });
        };

        self.init();

        self.delete = function (id) {

            //调用后台的方法

        }

    });