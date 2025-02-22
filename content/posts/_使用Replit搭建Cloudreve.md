---
title: 使用Replit搭建Cloudreve
keywords: 'cloudreve,replit,搭建'
description: '使用Replit搭建Cloudreve'
abbrlink: cloudreve
date: 2022-07-28 12:06:00
updated: 2022-07-28 12:06:00
tags: 
    - Cloudrever
    - Replit
    - 白嫖
categories:
    - 经验分享
cover: https://img.marcus233.top/i/24/03/65ed66df5c3c0.webp
tcolor: CBE9F7
swiper_index: 3 #置顶轮播图顺序，非负整数，数字越大越靠前
top_group_index: 3
---
## 演示地址
[Demo](https://demo.cloudreve.org)
## Cloudreve简介
![cloudreve](https://www.gitbook.com/cdn-cgi/image/width=24,height=24,fit=contain,dpr=3,format=auto/https%3A%2F%2F3847020651-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fcollections%252FwqgIMrzTAT3E40ScUdPF%252Ficon%252F3v5lygqjbk28vCT8Bz2Y%252Flogo192.png%3Falt%3Dmedia%26token%3D8713a140-0480-47a2-b767-ebad48ec49f7)
Cloudreve 可以让您快速搭建起公私兼备的网盘系统。Cloudreve 在底层支持不同的云存储平台，用户在实际使用时无须关心物理存储方式。你可以使用 Cloudreve 搭建个人用网盘、文件分享系统，亦或是针对大小团体的公有云系统。

<!-- more -->

## 快速搭建
新建一个bash项目
console或shell内输入以下代码

```shell
wget https://github.com/cloudreve/Cloudreve/releases/download/3.5.3/cloudreve_3.5.3_linux_amd64.tar.gz
```
等待输出完毕
再输入以下代码

```shell
tar -zxvf cloudreve_3.5.3_linux_amd64.tar.gz
```
等待解压
最后输入 `./cloudreve` 运行

```shell
./cloudreve
```
运行后在输出中找到账号和密码
类似这样
![2022.7.28.二.png][2]

```默认账号
admin@cloudreve.org
```
登陆 `(这个项目名).(账户名).repl.co` 
快速搭建完成了！👍
登陆后点头像-控制面板
根据自己喜好更改
## 部署进Replit
进入刚才Replit的项目里
file里找到main.sh
编辑
```bash
chmod +x ./cloudreve
./cloudreve
```
![2022.7.28.三.png][3]
重启Replit
完成👍


[1]: https://cdn.jsdelivr.net/gh/MarcusYYDS/tuchuang/usr/uploads/2022/08/4209458325.png
[2]: https://cdn.jsdelivr.net/gh/MarcusYYDS/tuchuang/usr/uploads/2022/08/1183548629.png
[3]: https://cdn.jsdelivr.net/gh/MarcusYYDS/tuchuang/usr/uploads/2022/08/863116350.png