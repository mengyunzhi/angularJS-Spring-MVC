# 第九节 后台完善

## 控制器

上一节中，我们写了一段这样的代码，下面，我们深度学习一下`SpringMVC`控制器。

```java
package com.mengyunzhi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// RestController注解：声明一个控制器
@RestController
public class HelloWorld {

    // RequestMapping注解：将/helloWorld映射到say方法上。
    @RequestMapping("/helloWorld")
    public String say() {
        return "hello world api";
    }
}
```

在`SpringMVC`中，控制器`Controller`负责处理由`DispatcherServlet`分发的请求，即：`DispatcherServlet`起到了路由的作用。

我们不需要知道`DispatcherServlet`到底是什么，只需要知道它能够通过用户输入的URL来自动执行某个控制器中的某个触发器就可以了。

在`ThinkPHP`中，也内置了这样的功能，我们把`ThinkPHP`中的内置的默认路由功能简称为[MCA](https://www.kancloud.cn/yunzhiclub/thinkphp5guide/165007)

定义一个控制器非常简单，我们不需要做任务的继承操作（`ThinkPHP`是通过继承`think\Controller`来实现的)，而是只需要在需要声明为控制器的类上添加`@RestController`注解即可。

```java
@RestController
public class HelloWorld {
    ...
}
```

这里的`@RequestMapping`是用来构建请求路径与方法（和`ThinkPHP`一样，我们常把可以被路径触发到的方法称为触发器）之间的映射的。`@RequestMapping`将`/helloWorld`这个路径映射到`say`方法这个触发器上。有了`@RequestMapping`这个注解，当用户的路径输入`/helloWorld`便会触发`say`方法。

```java
@RequestMapping("/helloWorld")
public String say() {
    return "hello world api";
}
```

如果用官方点的语言来描述，则是：项目启动后，当用户对`127.0.0.1:8080/helloWorld`发起请求时，`SpringMVC`框架的`DispatcherServlet`就会截获这个请求，然后把这个请求交给对应的触发器去处理。

## 数据类型

我们来理一下前台请求后台的流程。

前台`$http`发送请求->控制器处理请求->返回数据->前台使用

返回数据时，我们就需要思考，前台想获取的是什么格式的数据呢？我们试一下。

![](image/0.png)

我们看到，如果我们直接将我们的字符串`"hello world api"`返回给前台，会报错，提示信息为`Data must be a valid JSON object`（数据必须是一个有效的`Json`对象）。

> JSON（JavaScript Object Notation）是一种由道格拉斯·克罗克福特构想设计、轻量级的数据交换语言，以文字为基础，且易于让人阅读。来自[Json-维基百科](https://zh.wikipedia.org/wiki/JSON)。

如果你想深度学习一下`Json`的话，可以看看这篇[Json教程](http://www.w3school.com.cn/json/index.asp)。

所以要返回给前台`Hello World`，我们后台不能仅仅返回一个字符串，前台需要的是`Json`对象。

## 方法修改

所谓`Json`对象，即按特殊格式组成的一串字符串。既然前台需要，那我们就返回一个`Json`对象，对方法进行如下修改。

```java
package com.mengyunzhi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// RestController注解：声明一个控制器
@RestController
public class HelloWorld {

    // RequestMapping注解：将/helloWorld映射到say方法上。
    @RequestMapping("/helloWorld")
    public SayHello say() {
    
        // 新建一个SayHello类的对象sayHello
        SayHello sayHello = new SayHello();
        // 调用sayHello的setValue方法，设置value为"hello world api"
        sayHello.setValue("hello world api");
        // 返回sayHello对象
        return sayHello;
    }

    // 定义一个静态内部类SayHello
    public static class SayHello {
    
        private String value;

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }
    }
}
```

我们在控制器中定义了一个静态内部类，`say`方法中新建`SayHello`对象，设置`value`，返回该对象。

有人可能会有疑问了，我们这里返回的可以是任意一个类的对象，前台需要的是`Json`格式的对象啊？那么`SpringMVC`返回给前台的到底是什么，我们来试一下。

![](image/1.png)

运行项目，`com.mengyunzhi.Application : Started Application`。

打开浏览器，输入`http://127.0.0.1:8080/helloWorld`，我们看到返回的就是一个`Json`对象！

![](image/2.png)

`@RestController`负责将`SayHello`对象转换为我们想要的`Json`格式。

在下一节中，让我们共同学习前台如何获取返回的`Json`对象，并将`hello world api`显示在前台。