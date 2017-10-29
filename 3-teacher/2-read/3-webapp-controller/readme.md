
## 3.2.3 从前台c层读取数据

上一节中，我们直接将数据写在`v`层，来显示我们想要的效果，实际项目中我们`v`层的数据来自`c`层，本节中，我们将试着前台从`c`层读取数据显示在`v`层。

如图，我们要编写的`v`层`main.html`对应的`c`层代码为`main.js`

![](image/2017-10-28-21-06-38.png) 

首先我们将前台要显示的数据添加到`c`层，在这里我们来添加`JSON`格式数据。`JSON` 语法是 `JavaScript` 对象表示法语法的子集。方括号保存数组;花括号保存对象;数据在名称/值对中，如名称`id`的值为`1`;数据由逗号分隔。

``` javascript
angular.module('testApp')
  .controller('MainCtrl', function($scope) {
    $scope.data = [
      {
        id: 1,
        name: 'zhangsan',
        sex: 0,
        email: 'zhangsan@mengyunzhi.com',
        username: 'zhangsan'
      },
      {
        id: 2,
        name: 'lisi',
        sex: 1,
        email: 'lisi@mengyunzhi.com',
        username: 'lisi'
      }
    ];
  });
```

接着我们来写`v`层，前面我们讲过`$scop`能将`c`层的数据传递到v层，现在我们的`v`层要接受并显示数据。


``` html
<div class="row marketing">
  <table>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>sex</th>
      <th>email</th>
      <th>username</th>
    </tr>
    <tr ng-repeat="_data in data">
      <td>{{_data.id}}</td>
      <td>{{_data.name}}</td>
      <td>{{_data.sex}}</td>
      <td>{{_data.email}}</td>
      <td>{{_data.username}}</td>
    </tr>
  </table>
  <pre>{{data | json}}</pre>
</div>
```

在显示接受数据时我们引入了两个新知识`ng-repeat`和`{{data | json}}`。

`ng-repeat="_data in data"`的意思是对于`data`数组中的每一个对象，都把`<tr>`中的`DOM`结构复制一份（包括`tr`本身），对于`tr`的每一次拷贝都会把一个叫做`_data`的对象设置给它，这样我们就可以在模板中使用这份拷贝对象了，如下图所示我们产生了两个`<tr>`。

 `{{data |  json}}`这里我们用到了angularjs中的过滤器，过滤器可以使用一个管道字符（|）添加到表达式和指令中。`json`为将数据转化为json格式的数据来显示。
 
 没有加过滤器之前，如图所示，不利用我们观察显示效果
 
 ![](image/2017-10-29-14-56-09.png) 

添加过滤器之后，`v`层的显示效果如图所示：

![](image/2017-10-28-22-16-11.png) 

---

作者：朱晨澍
