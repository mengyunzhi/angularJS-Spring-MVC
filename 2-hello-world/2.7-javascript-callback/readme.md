# 第七节 回调函数

## 函数作为参数

```javascript
// 用get方法请求url地址
$http.get(url)
	// then方法传入success与error两个函数为参数
    .then(function success(response) {
    	// 请求成功，将返回值的data赋给$scope的helloWorld
        $scope.helloWorld = response.data;
    }, function error(response) {
    	// 请求失败，控制台打印错误信息
        console.error('$http -> ' + url + ' error.', response);
    });
```

之前，我们用`$http`请求资源时写了一段这样的代码。

这里的`then`方法传入的参数竟然是函数，这可能让大家有些苦恼，我们来研究一下。

万物皆对象，虽然是个`function`，但是同时也是对象，把它当成对象就比较容易理解了。

即：传一个函数，就是传一个对象。

## 回调

```javascript
$http.get(url)
	// 传入success与error函数
    .then(function success() {}, function error() {});
```

`success`与`error`这两个被传入的、并被`then` “回头” 再调用的函数，我们称为回调函数。

回调函数，回头再调用的函数，`then` “回头” 再调用的`success`与`error`函数。

这里指的是我们给了`then`方法传入了两个函数，我们只是写了`success`与`error`两个函数，而至于这两个函数执不执行，执行哪个，什么时候执行完全看`then`方法。

## 简单的例子

小明去商店买电脑，刚好没有货。

小明告诉售货员：“电脑到了，打电话给我”。

过一段时间，电脑到货时，售货员给小明打电话。

小明与售货员两个对象， “打电话给小明” 作为一个函数传给了售货员，当电脑到货时，售货员才去执行这个函数。

*函数作为参数传入，但是在特定条件下执行，这就是回调。*

## 示例代码

```javascript
// 定义thenTest函数
var thenTest = function(successCallback, errorCallback) {
    var successHello = 'hello success callback';
    var errorHello = 'hello error callback';
    successCallback(successHello);
    errorCallback(errorHello);
};
// 定义successFunction函数
var successFunction = function(hello) {
    console.info('sucess recive hello:', hello);
};
// 定义errorFunction函数
var errorFunction = function(hello) {
    console.info('error revice hello: ', hello);
};
// 调用thenTest函数，并传入两个参数
thenTest(successFunction, errorFunction);
```

假设程序员甲写了一个函数`thenTest`，我们要使用这个函数，他告诉我们第一个函数是程序正确时执行的，第二个是错误时执行的。

我们只需要知道，正确时应该执行什么，错误时执行什么，然后写成函数传进去，这就是回调函数。

这里，我们会发现，传入的两个参数函数就像是在函数内部定义的一样，可以直接使用函数内的数据。

如果没有回调的出现，我们想对函数内数据进行操作需要将其获取出来，而我们现在可以利用回调函数传入函数体，从而在函数内部执行，这样就可以直接获取函数内部变量。

`Javascript`回调函数非常美妙且功能强大，它们为你的`web`应用和代码提供了诸多好处。你应该在有需求时使用它；或者为了代码的抽象性，可维护性以及可读性而使用回调函数来重构你的代码。

## 参考资料

[理解与使用Javascript中的回调函数](http://www.html-js.com/article/Sexy-Javascript-understand-the-callback-function-with-the-use-of-Javascript-in)

*作者：张喜硕*