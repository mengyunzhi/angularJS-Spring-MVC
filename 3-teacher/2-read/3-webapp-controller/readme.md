
## 3.2.3 从前台c层读取数据

上一节中，我们直接将数据写在`v`层，来显示我们想要的效果，实际项目中我们`v`层的数据来自`c`层，本节中，我们将试着前台从`c`层读取数据显示在`v`层。

如图，我们要编写的`v`层`main.html`对应的`c`层代码为`main.js`

![](image/2017-10-28-21-06-38.png) 

首先我们将前台要显示的数据添加到`c`层，在这里我们来添加`JSON`格式数据。`JSON` 语法是 `JavaScript` 对象表示法语法的子集。在`javascript`中，我们使用`[]`来定义一个数组。使用`{}`来定义一个对象。在对象中，使用`key: value`来声明一个属性及该属性对应的值 ，数据由逗号分隔。

下面给出两种写法：

第一种便于理解

```javascript
angular.module('testApp')
  .controller('MainCtrl', function($scope) {
    var data = [{
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

    $scope.data = data;

  });
```

在本情景模式下，我们也会经常使用第二种 。效果与上一种完全相同。

 注意： 我们在编程中，比较常用第一种，而不是第二种。
第一种先定义，再赋值给`V`层，逻辑更清楚。当第一种不适用于当前情景时，我们才会使用第二种。
本节中，我们在书写时，并没有完全遵守这个约定，原因是`$scope.data`只是临时使用一下。但这种作法是不对的。

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

接着我们来写`v`层，前面我们讲过`$scope`相当于`Thinkphp`中的`this->assign();`,能将`c`层的数据传递到`v`层，现在我们的`v`层要接受并显示数据，代码如图。


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

在显示接受数据时我们引入了两个新知识:`ng-repeat`和`{{data | json}}`。

`ng-repeat="_data in data"`相当于`Thinkphp`中的`<volist name = "_data" id = "data">`,其作用是遍历`data`，每次将遍历到的子值赋值给`_data`,这样我们就可以使用这份拷贝对象了，如下图所示我们产生了两个`<tr>`。

 `{{data |  json}}`这里我们用到了`angularjs`中的过滤器，过滤器可以使用一个管道字符`|`添加到表达式和指令中。`json`为将数据转化为`json`格式的数据来显示，注意在这里我们的过滤器要写在`<pre>`标签里面，`<pre> `可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。
 
 > 过滤器：同`ThinkPHP`中的过滤器一样，把一种数据格式转换成另外一种数据格式。
 
 没有加过滤器之前，如图所示，不利于我们观察显示效果。
 
 ![](image/2017-10-29-14-56-09.png) 

添加过滤器之后，`v`层的显示效果如图所示：

![](image/2017-10-28-22-16-11.png) 

---

作者：朱晨澍
