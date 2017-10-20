在项目中，新建一个data文件夹，并在data文件夹中，新建`helloWorld.txt`。内容输入Hello Yunzhi.
在controller中，引入$http，对data中的helloWorld.txt发起请求。
1. 使用console.log(response)打印请求信息。
并说明：如果请求成功，调用then中的第一个方法，如果失败则调用 then中的第二个方法。
给出请求失败的示例，比如将请求地址更改为：helloWorld1.txt

2. 使用$scope.helloWorld = response.data; 进行数据绑定。

3. 更改helloWorld.txt中的字符串，V层中也根着变化。

4. 给出时序图。
C -> helloWorld.txt -> C -> V