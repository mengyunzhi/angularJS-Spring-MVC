# 第七节 回调函数

## 函数作为参数

```javascript
// 用get方法请求url地址
$http.get(url)
	// then方法传入success与error两个函数为参数
    .then(function success(response){
    	// 请求成功，将返回值的data赋给$scope的helloWorld
        $scope.helloWorld = response.data;
    }, function error(response){
    	// 请求失败，控制台打印错误信息
        console.error('$http -> ' + url + ' error.', response);
    });
```

之前，我们用`$http`请求资源时写了一段这样的代码。

这里的`then`方法传入的参数竟然是函数，这可能让大家有些苦恼，我们来研究一下。

## 回调

回调函数，回头再调用的函数，`then` “回头” 再调用的`success`与`error`函数。

这里指的是我们给了`then`方法传入了两个函数，我们只是写了`success`与`error`两个函数，而至于这两个函数执不执行，执行哪个，什么时候执行完全看`then`方法。

```javascript
$http.get(url)
	// 传入success与error函数
    .then(function success() {}, function error() {});
```

`success`与`error`这两个被传入的、并被`then` “回头” 再调用的函数，我们称为回调函数。

## 简单的例子

小明去商店买电脑，刚好没有货。

小明告诉售货员：“电脑到了，打电话给我”。

过一段时间，电脑到货时，售货员给小明打电话。

小明与售货员两个对象， “打电话给小明” 作为一个函数传给了售货员，当电脑到货时，售货员才去执行这个函数。

*函数作为参数传入，但是在特定条件下执行，这就是回调。*

## 示例代码

```javascript
// 自定义thenTest函数，该函数需要两个函数为参数
var thenTest = function(successCallback, errorCallback) {
    var successHello = 'hello success callback';
    var errorHello = 'hello error callback';
    successCallback(successHello);
    errorCallback(errorHello);
};
// successFunction函数
var successFunction = function(hello) {
    console.info('sucess recive hello:', hello);
};
// errorFunction函数
var errorFunction = function(hello) {
    console.info('error revice hello: ', hello);
};
// 调用thenTest函数，并传入successFunction与errorFunction函数
thenTest(successFunction, errorFunction);
```

## 什么时候用

有同学可能以为只有异步的时候才会使用回调函数，其实不然，同步的时候也可以用回调函数。

回调本质上是一种设计模式，并且`jQuery`(包括其他框架)的设计原则遵循了这个模式。

## 参考资料

[JavaScript 回调函数怎么理解](https://segmentfault.com/q/1010000000140970)

[浅谈 javascript 回调函数](http://wiki.jikexueyuan.com/project/brief-talk-js/callback-function.html)

*作者：张喜硕*