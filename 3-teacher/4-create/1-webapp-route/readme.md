
## 3.4.1 前台路由

在本章中我们会试着在前台向后台请求某个`id`的数据并在前台显示出来，为此像之前`3.3.1`节一样我们也要先建立路由，本章中为了方便起见，我们使用项目生成时所自带的`/about`路由及其配置的`c`层和`v`层作为我们本章的`c`层和`v`层。路由文件所在位置为`webapp/app/scripts/app.js`,部分代码如下

```javascript
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
```

根据上述代码的路由配置，我们的`c`层文件所在的位置为`webapp/app/scripts/controllers/about.js`，对应的控制器为`AboutCtrl`,部分代码如下

```javascript
angular.module('testApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
```

根据上述代码的路由配置，我们的`v`层文件所在的位置为`webapp/app/scripts/controllers/views/about.html`，代码如下

```html
<p>This is the about view.</p>
```

不知道你有没有发现一个问题，当我们在浏览器上点击跳转到`about.html`页面时，我们的浏览器地址栏内地址会出现乱码，而且我们的页面无法跳转。乱码地址如下：

```
http://localhost:9000/#!/#%2Fabout
```

为此我们要将跳转时的`url`中的`#`改为`#！`，我们要将`webapp/app/index.html`中的如下代码
```html
<ul class="nav navbar-nav">
  <li class="active"><a href="#/">Home</a></li>
  <li><a ng-href="#/about">About</a></li>
  <li><a ng-href="#/">Contact</a></li>
</ul>
```

更改为

```html
<ul class="nav navbar-nav">
  <li class="active"><a href="#!/">Home</a></li>
  <li><a ng-href="#!/about">About</a></li>
  <li><a ng-href="#!/">Contact</a></li>
</ul>
```

接着我们就能正确的跳转界面了。显示的正确地址如下
```
http://localhost:9000/#!/about
```

---

作者：朱晨澍