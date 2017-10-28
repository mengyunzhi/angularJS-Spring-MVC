# 前后台跨域连接
上节我们完成了后台代码的编写，这节我们将实现把后台的数据传到前台并显示。

## 前后台对接

###更改路由
1.首先我们要把前台控制器的代码修改一下
```
angular.module('webappApp')
  .controller('MainCtrl', function($scope, $http) {
    var url = 'http://localhost:8080/helloWorld';
    $http.get(url)
      .then(function success(response) {
        $scope.data = response.data;
      }, function error(response) {
        console.error('url:' + url, response);
      });
  });
```
**根本性的变化如下**：
之前请求前台的模拟数据，对应的路由为：
```
var url = 'http://localhost:9000/data/helloWorld.txt';
```
如果我们想要请求后台的数据，那么就要对路由进行一下改写如下：
```
var url = 'http://localhost:8080/helloWorld';
```
2.更改后的结果
改完之后运行一下后台，则会在浏览器控制台中报如下的错误：

![](image/1.png)

这就是所谓的跨域问题，下面我们将通过对后台进行相应的配置来实现跨域。


### 后台实现跨域
1.后台代码改动
我们对Application文件的内容进行一下修改，一开始内容如下：

```
package com.mengyunzhi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

修改后内容如下：
```
package com.mengyunzhi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:9000");
            }
        };
    }
}
```
注意 /**
2.修改后结果显示
再次重启一下后台，再次查看控制台，控制台不会报错，而且后台数据传过来了

![](image/2.png)


前期我们不需要深入了解什么是跨域，我们只要清楚如何实现跨域就可以了。

详细内容请参考[官方文档](http://spring.io/guides/gs/rest-service-cors/) 

## 跨域
简单的了解一下跨域：
### 什么是跨域

### 

