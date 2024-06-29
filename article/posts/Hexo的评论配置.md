---
title: Hexo的评论配置
keywords: 'Hexo的评论配置,Marcus,twikoo,valine,waline'
description: Hexo的twikoo,valine和waline配置
abbrlink: comments
tags:
  - Hexo
  - Twikoo
  - Valine
  - Waline
categories:
  - [我的项目]
  - [经验分享]
date: 2022-10-02 21:25:20
updated: 2022-10-04 21:25:20
cover: https://img.marcus233.top/i/24/03/65ed668191055.webp
tcolor: 134960
top_group_index: 1
---
## Hexo的评论配置(twikoo,valine,waline)

<!-- more -->

{% folding blue, 点击查看更新记录 %}
{% timeline 更新记录,blue %}

<!-- timeline 2022.10.4 -->
更新valine
<!-- endtimeline -->

<!-- timeline 2022.10.3 -->
更新twikoo魔改
<!-- endtimeline -->

<!-- timeline 2022.10.3 -->
更新twikoo
<!-- endtimeline -->

<!-- timeline 2022.10.2 -->
创建文章
<!-- endtimeline -->
{% endtimeline %}
{% endfolding %}

{% folding blue, 点击查看参考教程 %}

| **参考方向** | **教程原贴**                    | 魔改方向                                                     |
| ------------ | ------------------------------- | ------------------------------------------------------------ |
| twikoo       | [twikoo官方文档](twikoo.js.org) | [Twikoo魔改样式分享-博客评论系统的定制皮肤 张洪Heo (blog.zhheo.com)](https://blog.zhheo.com/p/8b1dde4c.html) |
| valine       | [valine官方文档](valine.js.org) |                                                              |
| waline       | [waline官方文档](waline.js.org) |                                                              |

{% endfolding %}

# 评论区别

| 评论   | 数据库                                             | 媒介                   | 适用人群                   |
| ------ | -------------------------------------------------- | ---------------------- | -------------------------- |
| twikoo | [MongoDB](mongodb.com)                             | vercel(需要自己的域名) | 有域名,第一次用MongoDB     |
| valine | [LeanCloud](leancloud.app)(建议用国际版(.app域名)) | 无                     | 无域名                     |
| waline | [LeanCloud](leancloud.app)(建议用国际版(.app域名)) | vercel(需要自己的域名) | 有域名不是,第一次用MongoDB |

| 评论   | 介绍                                                         | 有无后端 | Markdown 语法支持 | Emoji | 图片支持 |
| ------ | ------------------------------------------------------------ | -------- | ----------------- | ----- | -------- |
| twikoo | 一个简洁、安全、免费的静态网站评论系统                       | 有       | 有                | 有    | 有       |
| valine | 一款快速、简洁且高效的无后端评论系统                         | 无       | 有                | 有    | 无       |
| waline | 一款从 [Valine](https://valine.js.org/) 衍生的带后端评论系统 | 有       | 有                | 有    | 有       |

{% folding blue, 点击查twikoo特点 %}
一. 简单
	1. 免费搭建（使用云开发 / Vercel / 私有服务器作为评论后台）
	2. 简单部署（支持云开发 / Vercel 一键部署）
	二. 易用
	1. 支持回复、点赞
	2. 无需额外适配，支持搭配浅色主题与深色主题使用
	3. 支持 API 调用，批量获取文章评论数、最新评论
	4. 访客在昵称栏输入 QQ 号，会自动补全 QQ 昵称和 QQ 邮箱
	5. 访客填写数字 QQ 邮箱，会使用 QQ 头像作为评论头像
	6. 支持评论框粘贴图片（可禁用）
	7. 支持插入图片（可禁用）
	8. 支持去不图床、云开发图床
	9. 支持插入表情（可禁用）
	10. 支持 Ctrl + Enter 快捷回复
	11. 评论框内容实时保存草稿，刷新不会丢失
	12. 支持 Katex 公式
	13. 支持按语言的代码高亮
	三. 安全
	1. 隐私信息安全（通过云函数控制敏感字段（邮箱、IP、环境配置等）不会泄露）
	2. 支持 Akismet 垃圾评论检测（需自行注册 akismet.com）
	3. 支持腾讯云内容安全垃圾评论检测（需自行注册 腾讯云内容安全）
	4. 支持人工审核模式
	5. 防 XSS 注入
	6. 支持限制每个 IP 每 10 分钟最多发表多少条评论
	四. 即时
	1. 支持邮件提醒（访客和博主）
	2. 支持微信提醒（仅针对博主，基于 Server酱，需自行注册）
	3. 支持 QQ 提醒（仅针对博主，基于 Qmsg酱，需自行注册）
	4. 支持 QQ 提醒（针对博主QQ或者群，基于 go-cqhttp，需自己有服务器）
	五. 个性
	1. 支持自定义评论框背景图片
	2. 支持自定义“博主”标识文字
	3. 支持自定义通知邮件模板
	4. 支持自定义评论框提示信息（placeholder）
	5. 支持自定义表情列表（兼容 OwO 的数据格式）
	6. 支持自定义【昵称】【邮箱】【网址】必填 / 选填
	7. 支持自定义代码高亮主题
	六. 便捷管理
	1. 内嵌式管理面板，通过密码登录，可方便地查看评论、隐藏评论、删除评论、修改配置
	2. 支持隐藏管理入口，通过输入暗号显示
	3. 支持从 Valine、Artalk、Disqus 导入评论
	七. 缺点
	1. 不支持 IE
{% endfolding %}
{% folding blue, 点击查valine特点 %}
1. 快速
2. 安全
3. Emoji 😉
4. 无后端实现
5. MarkDown 全语法支持
6. 轻量易用
7. 文章阅读量统计 v1.2.0+
{% endfolding %}
{% folding blue, 点击查valine特点 %}
1. 邮件通知
2. 微信通知
3. QQ 通知
4. Telegram 通知
5. Akismet
6. 文章统计
7. 多语言同步
8. 自定义语言支持
9. 登录支持
10. 评论管理
11. 评论删除
12. 其它数据库支持 (已支持 LeanCloud, MySQL, MongoDB, SQLite, PostgreSQL, CloudBase, Deta, 轻服务, GitHub)
13. 基于 IP 的发布评论频率限制
14. 基于关键词的评论过滤限制
15. IP 黑名单
16. 重复内容检测
17. CloudBase 腾讯云开发部署支持
18. 社交登录
19. 置顶评论
20. 评论赞踩
{% endfolding %}
## Twikoo

{% folding blue, 点击查twikoo教程 %}

数据库设置

1.申请 [MongoDB](https://www.mongodb.com/cloud/atlas/register) 账号

   {% folding blue, 点击查看图片教程 %}

   ![](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/202210031037.jpeg)

   填入信息

   ![20221003105658](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003105658.png)

   ![20221003105757](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003105757.png)

   小调查填写

   ![20221003110323](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003110323.png)

   选择`FREE`

   {% endfolding %}

2.创建免费 MongoDB 数据库，区域选择 `AWS / N. Virginia (us-east-1)`

   ![20221003105929](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003105929.png)

   ![20221003110027](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003110027.png)

3.设置`username`和`password`并记牢

   ![20221003110444](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003110444.png)

4.`IP Address`填入`0.0.0.0`然后add,最后完成关闭,返回控制台

   ![20221003110544](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003110544.png)

   ![20221003115225](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003115225.png)

5.在 Clusters 页面点击 CONNECT,选择`Connect your application`

   ![20221003104350](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003104350.png)

6.`DRIVER`选择Node.js,`VERSION`选择4.1 or later

   ![20221003120532](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003120532.png)

7.记住`mongodb+srv://<user>:<password>`这段文字,并将`<user>`和`<password>`换成自己的

## vercel配置

1.申请 [Vercel](https://vercel.com/signup) 账号

2.一键部署进vercel
  [![img](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/main/src/server/vercel-min)

3.有什么用什么

   ![20221003142501](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003142501.png)

4.选择账号和设置仓库名称

   ![20221003142602](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003142602.png)

5.等待部署完成

   ![20221003142804](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003142804.png)

6.前往控制台

   ![20221003142852](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003142852.png)

7.点击`Setting`-`environment-variables`新建一个name为`MONGODB_URI`,值为上面第七步的数据库连接字符串

   ![20221003143110](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003143110.png)

8.重新部署一下

   ![20221003151430](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/20221003151430.png)

   ![image-20221003151705887](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/image-20221003151705887.png)

11.等待部署ing

12.![image-20221003151829531](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/image-20221003151829531.png)

13.完成![image-20221003151904018](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/image-20221003151904018.png)

14.绑定域名![image-20221003152053339](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/image-20221003152053339.png)

| Type  | Name   | Value                |
| ----- | ------ | -------------------- |
| CNAME | twikoo | cname.vercel-dns.com |

{% tip warning faa-horizontal animated %}
2021年5月初，`Vercel`因为一些原因被`GFW`屏蔽，导致无法访问。各位可以通过更改相应的域名解析记录来恢复访问。
A记录就从`76.76.21.21` 改成 `52.76.85.65`，`CNAME`记录则是从`cname-vercel-dns.com.`改成 `cname-china.vercel-dns.com.`；关于A记录，可用的IP值也可以从这个里面找：[Vercel可用解析记录IP](https://gist.github.com/ChenYFan/fc2bd4ec1795766f2613b52ba123c0f8),因为是gist，大概要翻墙才能看。
{% endtip %}

15.访问! [我的twikoo](https://twikoo.marcus233.top/)

![image-20221003153309668](https://npm.elemecdn.com/marcusyyds-assets/img/2022-10-03/image-20221003153309668.png)

## 主题文件配置
1. 打开`themes\butterfly\_config.yml`
2. 填入

```yaml
# Twikoo
# https://github.com/imaegoo/twikoo
twikoo:
  envId: # https://twikoo.marcus233.top/
  region: ap-shanghai
  visitor: true
  option:
```

3. hexo三联

## 魔改

{% note info simple %}来自[Twikoo魔改样式分享-博客评论系统的定制皮肤 | 张洪Heo (zhheo.com)](https://blog.zhheo.com/p/8b1dde4c.html){% endnote %}

### 魔改内容

1. 先输入评论再输入个人信息

2. 信息整合，让结构更有条理

3. 将工具放入输入框，更符合直觉

4. 删除了我个人不需要的按钮

### 装配
```url
https://cdn.jsdelivr.net/gh/zhheo/twikoo@dev/dist/twikoo.all.min.js
```

或者

```url
https://cdn1.tianli0.top/gh/zhheo/twikoo@dev/dist/twikoo.all.min.js
```

由[免费JSD镜像使用手册 – Tianli's blog (tianli-blog.club)](https://tianli-blog.club/jsd/)提供

### 查看样式

[查看样式](#post-comment)

{% endfolding %}

# valine

{% folding blue, 点击查valine教程 %}

## 获取APP ID 和 APP Key

1. 请先[登录](https://leancloud.cn/dashboard/login.html#/signin)或[注册](https://leancloud.cn/dashboard/login.html#/signup) `LeanCloud`, 进入[控制台](https://leancloud.cn/dashboard/applist.html#/apps)后点击左下角[创建应用](https://leancloud.cn/dashboard/applist.html#/newapp)：

2. 应用创建好以后，进入刚刚创建的应用，选择左下角的`设置`>`应用Key`，然后就能看到你的`APP ID`和`APP Key`了：

## 主题文件配置

1. 打开`themes\butterfly\_config.yml`
2. 填入

```yaml
valine:
  appId: 这一项
  appKey: 这一项
  avatar: monsterid # gravatar style https://valine.js.org/#/avatar
  serverURLs: # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
  bg: # valine background
  visitor: false
  option:
```

3. hexo三联
{% endfolding %}

# TODO

{% checkbox blue checked, Twikoo %}

{% checkbox blue checked, Valine %}

{% checkbox blue , Waline %}