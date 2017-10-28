
## 第五节 angularjs 模拟数据请求

本节我们来介绍`angularjs`如何发起`http`请求, 以获取一个`http`资源

为了要获取到数据，我们要建立数据，下面开始我们的工作，
首先在`app`目录下创建`data`文件夹，在data文件夹中建立`helloWorld.txt`,里面写入`Hello World Yunzhi!`

![](image/2017-10-24-09-49-58.png) 

现在我们有了数据了就要开始数据请求，我们通过`$http`来请求数据,`$http `是 `AngularJS `中的一个核心服务，用于读取远程服务器的数据。
以`$`开头的服务，都是`angulajs`的自带服务。

 1. 在书写代码时，先书写`$http.get().then();`方法，`get`获取请求地址，`then`发起请求，读取远程服务器的数据
 
 ``` javascript
 angular.module('testApp')
    .controller('MainCtrl', function($scope, $http) {
        var url = 'http://localhost:9000/data/helloWorld.txt'; //  http请求的地址
        $http.get(url).then();
    });
 ```
 
 2. 然后再定义请求成功后执行`var success = function() {};`函数，请求失败后执行`var error = function() {};`函 数
 
 ``` javascript
 angular.module('testApp')
    .controller('MainCtrl', function($scope, $http) {
        var url = 'http://localhost:9000/data/helloWorld.txt'; //  http请求的地址
        // 请求成功执行代码
        var success = function() {
            console.info('print success response');
        };
        // 请求失败执行代码
        var error = function() {
            console.error('$http -> ' + url + ' error.');
        };
        $http.get(url).then();
    });
 ```
 
 3. 然后再将`success`和 `error ` 放入`then`中`$http.get().then(success, error);`。
 
 ``` javascript
angular.module('testApp')
    .controller('MainCtrl', function($scope, $http) {
        var url = 'http://localhost:9000/data/helloWorld.txt';  //  http请求的地址
        // 请求成功执行代码
        var success = function(response) {
            console.info('print success response', response);
        };
        // 请求失败执行代码
        var error = function(response) {
            console.error('$http -> ' + url + ' error.', response);
        };
        $http.get(url).then(success, error);  // get获得请求地址，then发起请求，请求成功执行第一个函数，失败执行第二个
    });
  ```
  
 也可以直接将`success`和`error`函数放入then中。
  
  ```  javascript
   angular.module('testApp')
    .controller('MainCtrl', function($scope, $http) {
        var url = 'http://localhost:9000/data/helloWorld.txt';  // http请求的地址
        // get获得请求地址，then发起请求，请求成功执行第一个函数，失败执行第二个
        $http.get(url)
            .then(function success(response) { // 请求成功
                console.info('print success response', response);
            }, function error(response) { // 请求失败
                console.error('$http -> ' + url + ' error.', response);
            });
    });
```
  
  是的，你没有看错，我们直接将`success` 和` error`两个函数做为参数传给了`$http.get(url).then()`。就也是`javascript`与我们学过的传统语言最大的不同。在我们以前 的习惯中，我们只会将变量、对象做为参数传给另一个方法。但`javascript`中，函数也可以像参数一样传过去。
而且慢慢的我们发现，相对于提前定义，我们更愿意这样使用：

![](image/Peek2017-10-27-16-50.gif) 
  
  请求成功结果入图所示
  
 ![](image/2017-10-24-19-38-15.png) 
 
 如果`http`请求错误如`url`写错
 
 `var url = 'http://localhost:9000/data/helloWorld1.txt'`
 
  则是执行了`then`的第二个方法（第二个报错）
 
 ![](image/2017-10-24-19-32-13.png) 
 
 下面将获取到的数据返回到v层
 
 c层代码(main.js)
 
 ```javascript
 angular.module('testApp')
    .controller('MainCtrl', function($scope, $http) {
        // http请求的网址
        var url = 'http://localhost:9000/data/helloWorld.txt';
        // get获得请求地址，then发起请求，请求成功执行第一个函数，失败执行第二个
        $http.get(url)
            .then(function success(response) { // 请求成功
                // 控制台打印
                console.info('print success response', response);
                // 返回v层
                $scope.helloWorld = response.data;
            }, function error(response) { // 请求失败
                console.error('$http -> ' + url + ' error.', response);
            });
    });
 ```
 
 v层代码(mian.html)
 
 ```html
 <div class="jumbotron">
    <h1> {{helloWorld}} </h1><!-- c层数据引入 -->
    <p class="lead">
        <img src="images/yeoman.png" alt="I'm Yeoman">
        <br> Always a pleasure scaffolding your apps.
    </p>
    <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p>
</div>
 ```
 
 结果如图
 
 ![](image/2017-10-24-19-25.png) 
 
  下面我们改变`helloWorld.txt`里的数据将`Hello World Yunzhi!`改为`Hi Yunzhi!`,观察数据变化
  
   ![](image/2017-10-24-20-44-05.png) 
  
  根据时序图理解一下本节的数据传输
  
  ![](image/2017-10-24-20-18-28.png) 
  
  ---
  
  作者：朱晨澍