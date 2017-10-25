本节中，讲回调函数。
核心思想：
回调函数：回头再调用。

# 第七节 回调函数

## 函数作为参数

```javascript
$http.get(url)
    .then(function success(response){
        $scope.helloWorld = response.data;
    }, function error(response){
        console.error('$http -> ' + url + ' error.', response);
    });
```

之前，我们用`$http`请求资源时写了一段这样的代码。

这里的`then`方法传入的参数可能让大家有些苦恼，我们来研究一下。

## 回调

回调，回头再调用，`then`回头再调用的`success`与`error`方法。

这里指的是我们给了`then`方法传入了两个函数，我们只是写了`success`与`error`两个函数，而至于这两个函数执不执行，执行哪个，什么时候执行完全看`then`方法。