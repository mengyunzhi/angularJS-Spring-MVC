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
    var print = function() {
        console.info($scope.helloWorld, $scope.hi);
    };

    var url = 'http://localhost:9000/data/helloWorld.txt';
    console.log('before handle $http.get().then()');
    print();
    $http.get(url)
    .then(function success(response){
        console.info('print success response', response);
        print();
        $scope.helloWorld = response.data;
        print();
    }, function error(response){
        console.error('$http -> ' + url + ' error.', response);
    });
    console.log('after handle $http.get().then()');
    print();

    console.log('before handle $scope.hi');
    print();
    $scope.hi = $scope.helloWorld + ' Hi!';
    console.log('after handle $scope.hi');
    print();
  });
