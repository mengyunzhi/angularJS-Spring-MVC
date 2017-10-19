第二节：xampp

访问网页和我们去商场买东西的原理基本是相同的。
我们去商场买东西：首先将需求提交给售货员，然后售货员分析我们的需求，并递交给我们想要的商品。

访问网页：我们将请求提交给服务器，服务器分析我们的请求，并返回我们想要的结果。

这里的服务器是个比较宽泛的词。我们说服务器其实也是一台计算机，只是由于它的功能是提供一些服务，那么我们给它起的名字叫服务器。就像商场也是一个房子，只是因为这个房子起到了卖东西的作用，所以我们把它叫做商场。

商场提供卖东西的服务，需要有售货员。计算机提供WEB访问的服务，需要服务程序。能提供这个服务的软件有很多，apache+php便是其中著名的一个。

所以在此，我们安装一个集成的软件XAMPP，该软件既集成了服务的功能，又集成了数据的功能。

xampp

XAMPP是一个把Apache网页服务器与PHP、Perl及MariaDB集成在一起的功能强大的建站集成软件包，允许用戶可以在自己的电脑上轻易的建立网页服务器。在此教程中我们主要使用他的MySQL服务。

ubuntu上安装

点击下面的链接通过浏览器下载xampp的linux版本

https://www.apachefriends.org/xampp-files/5.6.23/xampp-linux-x64-5.6.23-0-installer.run

如何安装Xampp?

进入下载文件所在的位置输入以下命令

 sudo ./xampp-linux-x64-5.6.23-0-installer.run
按照安装窗口点击下一步即可

如何启动XAMPP？

安装目录在 /opt/lampp/

输入以下命令 sudo /opt/lampp/lampp start

显示如下结果代表安装成功

  Starting XAMPP for Linux 5.6.23-0...

  XAMPP: Starting Apache...already running.

  XAMPP: Starting MySQL...already running.

  XAMPP: Starting ProFTPD...ok.
停止xampp

sudo /opt/lampp/xampp stop

windows上安装

XAMPP的官方下载地址

https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/

Step1：下载相应版本

教程中使用的版本为5.6.21，为了最大程度的和教程中示例代码保持统一，请下载该版本。



Step2：安装
推荐安装到d:\xampp目录下。

Step3：启动mysql
说明：MariaDB是开源数据库mysql的替代产品，使用方法与mysql完全相同。