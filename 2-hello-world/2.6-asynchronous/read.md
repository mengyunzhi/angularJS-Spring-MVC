# 异步机制
本节我们讲解一下angularJS里面的一个很重要的机制：**异步机制**（链接）
### 我们为什么讲异步机制？
我也不是很了解为什么有异步机制，它可能是对我们编程人员来说并没有什么好处，我们了解他最直接的原因就是避免踩坑。

### 异步这个坑
1.现在我把们模拟数据的内容接收过来，然后对其中的某个属性值进行修改。
我们一般的思路：
- 首先把模拟数据中所有的数据都传过来；
- 定义一个变量用来接收要修改的数据；
- 最后定义一个新的变量来保存修改后的内容。

```javascript
angular.module('webApp')
  .controller('MainCtrl', function($scope, $http) {
    // 通过路由获取传过来的数据
    var url = 'http://localhost:9000/data/helloWorld.txt';
    $http.get(url)
    // 判断是否传过来，并接收数据
    .then(function success(response){
        $scope.helloWorld = response.data;
    }, function error(response){
        console.error('$http -> ' + url + ' error.', response);
    });
    // 实现改变值
    $scope.hi = $scope.helloWorld + ' Hi!';
    // 查看一下结果
    console.info($scope.helloWorld);
    console.info($scope.hi);
  });
```

打开控制台查看一下结果：显示$scope.helloWorld这个属性没有被定义**udefined**

![](image/1.png)

作为新手的我们无意间就踩坑了，但老师鼓励我说大牛就是这样炼成的。

### 异步到底怎么回事？
我们用代码来讲一下这是什么鬼：有时候代码能更好解释某个问题。
```javascript
angular.module('webappApp')
  .controller('MainCtrl', function($scope, $http) {
  	var print = function() {
        console.info($scope.helloWorld, $scope.hi);
    };
    var url = 'http://localhost:9000/data/helloWorld.txt';
    console.log('1.未通过$http.get()获取数据之前打印结果：');
    print();
    $http.get(url)
    .then(function success(response){
    	console.info('2.成功获取数据！但没有对数据进行操作。', response);
        print();
        $scope.helloWorld = response.data;
        console.info('3.进行赋值操作后的打印结果：');
     	print();
    }, function error(response){
        console.error('$http -> ' + url + ' error.', response);
    });
    console.log('4.执行完$http.get().then()操作后：');
    print();
    console.log('5.在对$scope.hi操作之前：');
    print();
    $scope.hi = $scope.helloWorld + ' Hi!';     
    console.log('6.在对$scope.hi操作之后：');
    print();  
  });
```

我们正常的逻辑顺序是从上往下1->2->3->4->5->6依次执行，但控制台给我们的结果是：

![](image/2.png)

1->4->5->6->2->3这个顺序，其实就是获取数据的操作还没完，就急着执行下面的了，这就是异步机制。

3.我们如何解决这个问题呢？下一节回调函数将为我们很好地解决了这个问题。

