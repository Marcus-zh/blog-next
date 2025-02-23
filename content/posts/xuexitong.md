---
title: 学习通抢课脚本
date: 2025-02-23T12:03:00
tags:
  - 脚本
  - 学习通
  - Python
---
最近要抢课

一看学校发来的网址[`sdzx.chaoxing.com`](xxzx.chaoxing.com)

哟,这不是小学折磨我的学习通吗

熟练点了`F12`,进了开发者工具,一眼Vue

点抢课按钮,发现没有网络请求,但是有弹窗

调试了下,绷不住了,全是注释

```js
joinCourse: function(courseObj){
  var that = this;
  if(that.opType == 2){
    that.userEnroll();
    if(!that.checkAgainNum()){
      app.showMsg("重新选课数量已满！");
      return;
    }
  }
  if(that.opType == 1){
    if(!that.checkTime()){
      app.showMsg("当前时间不在选课计划时间内！");
    return;
    }
    if(!that.checkOverstep(courseObj)){
      app.showMsg("您的已选课数已达到规定数量！");
      return;
    }
    if(!that.checkConflict(courseObj)){
      app.showMsg("上课时间有冲突！");
      return;
      }
  }
  app.loading();
  $.ajax({
    url : ctx+ "enroll/joinCourse",
    type : "post",
    dataType : "json",
    data : {
      planId: that.plan.id,
      courseId: courseObj.id,
      opType: that.opType
    },
    success : function(data) {
      app.closeAllLayerPop();
      if(data.code == 1){
    app.showMsg("报名成功");
    courseObj.state=2;
    that.loadUserErollCourseList();
      }else{
        app.showMsg(data.message);
      }
    },
    error : function() {
      app.closeAllLayerPop();
      app.showMsg("报名错误，请稍后再试！");
    }
  });
},
```

因为是前端检查时间,所以调系统时间骗过浏览器一样可以获取请求

`PlanId`为当前选课模块,`courseId`为要抢的课的id

返回如下

```json
{
  "success": False,
  "code": 0,
  "message": "当前时间不在选课计划时间内！",
  "data": None,
  "timestamp": '1740139199751'
}
```

读代码可知,当`succes`字段为`True`或`code`字段为`1`就抢成功了

让[deepseek](https://deepseek.com/)用Python随便搓个脚本出来,大致如下

```python
def send_request():
    """发送请求"""
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    try:
        response_json = response.json()

        if response_json.get("success") == True:
            print("抢课成功！")
            return True
        else:
            if "当前时间不在选课计划时间内" in response_json.get("message", ""):
                print("选课时间未到，等待重试...")
            else:
                print(f"抢课失败：{response_json.get('message')}")
    except ValueError:
        print(f"Time: {datetime.now().strftime('%H:%M:%S')}, Status Code: {response.status_code}, Response: {response.text}")
    return False

def main():
    print("开始抢课脚本...")
    while True:
        if send_request():
            break
        time.sleep(0.1)
```

没有混淆不是最逆天的

最逆天的是没有防刷!

写完脚本去吃饭忘记改sleep参数了

挂了10分钟,每1秒一次,啥事没有

后面直接不管了,0.1秒每次

然后就

![秒抢](https://img2.marcus233.top/25/02/663407d1b25a8efb.png)

![抢到羽毛球啦](https://img2.marcus233.top/25/02/78f6d716d1511a44.png)

轻松抢到
