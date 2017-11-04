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

    // 定义一个函数，用于打印输出值
    var print = function() {
      console.info($scope.helloWorld, $scope.hi);
    };

    // 打印未获取数据之前的结果
    console.log('1.未通过$http.get()获取数据之前打印结果：');
    print();

    // 通过路由获取传过来的数据
    var url = 'http://localhost:9000/data/helloWorld.txt';
    $http.get(url)
      .then(function success(response) {

        // 打印获取结果和查看传过来的数据
        console.info('2.成功获取数据！但没有对数据进行操作。', response);
        print();

        // 接收传过来的值
        $scope.helloWorld = response.data;

        // 打印传过来后并赋值后的结果
        console.info('3.进行赋值操作后的打印结果：');
        print();
      }, function error(response) {
        console.error('$http -> ' + url + ' error.', response);
      });

    // 执行完我们认为执行完的$http.get().then()后
    console.log('4.执行完$http.get().then()操作后：');
    print();

    // 打印未对$scope.hi操作之前的结果
    console.log('5.在对$scope.hi操作之前：');
    print();

    // 对 $scope.hi 进行赋值
    $scope.hi = $scope.helloWorld + ' Hi!';

    // 打印对 $scope.hi 进行操作之后的结果
    console.log('6.在对$scope.hi操作之后：');
    print();
  });
