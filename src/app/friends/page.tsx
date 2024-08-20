// import { getAllFriends } from "@/core/friends"

import Card from "@/components/Card"
export default async function Friends(){
  let friendsJson = [
      {
        "class_name": "大佬们",
        "class_desc": "对我有帮助的大佬",
        "type": "card",
        "link_list": [
          {
            "name": "Marcus",
            "link": "https://blog.marcus233.top",
            "avatar": "https://img01.anheyu.com/useruploads/8/2023/08/09/64d307c2d8873.png",
            "descr": "人间值得，未来可期",
            "siteshot": "https://img01.anheyu.com/useruploads/8/2023/08/09/64d387fadfd13.png",
            "tag": "本站",
            "color": "vip"
          },
          {
            "name": "安知鱼",
            "link": "https://blog.anheyu.com/",
            "avatar": "https://image.anheyu.com/adminuploads/1/2022/09/11/631d80e87b859.jpg",
            "descr": "生活明朗，万物可爱",
            "siteshot": "https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg",
            "tag": "技术",
            "color": "vip"
          },
          {
            "name": "Leonus",
            "link": "https://blog.leonus.cn/",
            "avatar": "https://q1.qlogo.cn/g?b=qq&nk=553344777&s=5",
            "descr": "进一寸有进一寸的欢喜。",
            "rss": "/atom.xml",
            "tag": "技术",
            "color": "vip"
          },
          {
            "name": "Tianli",
            "link": "https://tianli-blog.club",
            "avatar": "https://img1.tianli0.top/logo.png",
            "descr": "惟其不可能，所以才相信。",
            "tag": "技术",
            "color": "vip"
          },
          {
            "name": "GB(FanWu)",
            "link": "https://blog.fanwu.link/",
            "avatar": "https://fcdn.dusays.com/images/2023/08/10/ofT.png",
            "descr": "分享知识，传授快乐"
          },
          {
            "name": "轻笑Chuckle",
            "link": "https://www.chuckle.top",
            "avatar": "https://cdn.chuqis.com/npm/chuckle-js-css/chuckle/head.webp",
            "descr": "宁静致远,倾尘轻笑"
          }
        ]
      },
      {
        "class_name": "冰糖红茶",
        "class_desc": "一个奇妙的组合",
        "type": "item",
        "link_list": [
          {
            "name": "张洪Heo",
            "link": "https://blog.zhheo.com/",
            "avatar": "https://img.zhheo.com/i/2022/08/19/62ff32fa28da1.png",
            "descr": "分享设计与科技生活"
          },
          {
            "name": "贰猹",
            "link": "https://noionion.top/",
            "avatar": "https://pub-noionion.oss-cn-hangzhou.aliyuncs.com/head.jpg",
            "descr": "用这生命中的每一秒，给自己一个不后悔的未来"
          },
          {
            "name": "Akilar",
            "link": "https://akilar.top/",
            "avatar": "https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg",
            "descr": "欢迎光临糖果屋"
          }
        ]
      },
      {
        "class_name": "Acrylic贡献者名单",
        "class_desc": "贡献了本主题的大佬们",
        "type": "item",
        "link_list": [
          {
            "name": "Shine",
            "link": "https://blog.shineyu.cn/",
            "avatar": "https://blog.shineyu.cn/img/shineyu_avatar.webp",
            "descr": "热爱生活点滴，分享时刻精彩。"
          },
          {
            "name": "Rootlex",
            "link": "https://blog.nalex.top",
            "avatar": "https://bu.dusays.com/2023/01/25/63d130a6ce9ea.jpg",
            "descr": "寒蝉黎明之时，便是重生之日"
          },
          {
            "name": "Gtwxxh",
            "link": "https://blog.gtwxxh.cn",
            "avatar": "https://cdn.staticaly.com/gh/gtwxxh666/pic@main/1/user.JPG",
            "descr": "扣首问路，码梦为生"
          },
          {
            "name": "张时贰",
            "link": "https://zhsher.cn/",
            "avatar": "https://q1.qlogo.cn/g?b=qq&nk=1310446718&s=5",
            "descr": "环转码，爱敲代码的小张！"
          },
          {
            "name": "Cartafi",
            "link": "https://www.startly.cn/",
            "avatar": "https://startly.s3.bitiful.net/links/avatar/avatar.webp",
            "descr": "互联网中的寂静之地"
          },
          {
            "name": "Adil",
            "link": "https://blog.adil.com.cn",
            "avatar": "https://adil.com.cn/img/touxiang.jpg",
            "descr": "生命不死，折腾不止"
          }
        ]
      },
      {
        "class_name": "好朋友",
        "class_desc": "我的好朋友!",
        "type": "item",
        "link_list": [
          {
            "name": "小植同学",
            "link": "https://blog.xiaoztx.top",
            "avatar": "https://blog.xiaoztx.top/img/xiaozhi.jpg",
            "descr": "生生不息，好运不止",
            "tag": "植"
          },
          {
            "name": "铭心石刻",
            "link": "https://blog.kouseki.cn/",
            "avatar": "https://blog.kouseki.cn/imgs/avatar.webp",
            "descr": "愿岁并谢，与友长兮",
            "tag": "石"
          },
          {
            "name": "葱苓",
            "link": "https://blog.itciraos.cn",
            "avatar": "https://cdn.chuqis.com/gh/ciraos/ciraos-static@main/img/avatar1.webp",
            "descr": "Dare && Do",
            "tag": "葱"
          },
          {
            "name": "屑殇",
            "link": "https://jinghuashang.cn/",
            "descr": "桃李春风一杯酒，江湖夜雨十年灯",
            "avatar": "https://jinghuashang.cn/img/acc.webp",
            "tag": "殇"
          }
        ]
      },
      {
        "class_name": "小伙伴",
        "class_desc": "那些人,那些事",
        "type": "item",
        "link_list": [
          {
            "name": "Fomalhaut🥝",
            "link": "https://www.fomal.cc/",
            "avatar": "https://www.fomal.cc/assets/head.jpg",
            "descr": "Future is now 🍭🍭🍭",
            "siteshot": "https://source.fomal.cc/siteshot/www.fomal.cn.jpg"
          },
          {
            "name": "花语阁",
            "link": "https://www.pigax.cn/",
            "avatar": "https://npm.elemecdn.com/butterfly-footer-beautify-ruoxi/5c52d93f4a509998e48da1b6ef734371.png",
            "descr": "花语倾城 江无月",
            "siteshot": "https://npm.elemecdn.com/butterfly-footer-beautify-ruoxi@1.0.2/IMG_20220618_111643.jpg"
          },
          {
            "name": "Nuyoah",
            "link": "https://262259.xyz/",
            "avatar": "https://s1.ax1x.com/2022/11/27/zUFla6.png",
            "descr": "以梦为马，不负韶华"
          },
          {
            "name": "昕某人",
            "link": "https://www.xinmouren.cn",
            "avatar": "https://bu.dusays.com/2022/08/23/6304943590776.webp",
            "descr": "嵌入式捡垃圾专员！"
          },
          {
            "name": "呆鱼",
            "link": "https://daiyu-233.top/",
            "avatar": "https://daiyu-233.top/img/avatar.png",
            "descr": "命运之所以称为命运，正是因为它无可改变。",
            "screenshot": "https://daiyu-233.top/img/Snipaste_2022-12-03_11-40-48.png"
          },
          {
            "name": "Ariasaka",
            "link": "https://yisous.xyz",
            "avatar": "https://bu.dusays.com/2022/12/01/638834c74239e.png",
            "descr": "人有悲欢离合 月有阴晴圆缺",
            "siteshot": "https://vercel.yisous.xyz/img/siteshot.png"
          },
          {
            "name": "Xlenco",
            "link": "https://xlenco.top/",
            "avatar": "https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=5",
            "descr": "最好的地方,是没去过的地方。最好的时光，是回不来的时光。"
          },
          {
            "name": "六岁",
            "link": "https://liusui.tk/",
            "descr": "一只摆烂的咸鱼罢了",
            "avatar": "http://liusui.cf/2022/12/03/69d56584b92ec.jpg"
          },
          {
            "name": "L1nSn0w",
            "link": "https://blog.linsnow.cn",
            "descr": "无限进步.🎈",
            "avatar": "https://blog.linsnow.cn/img/avatar.png"
          },
          {
            "name": "wzwzx",
            "link": "https://blog.wzwzx.cn",
            "avatar": "https://blog.wzwzx.cn/img/tx.jpg",
            "descr": "希望运气好一些"
          },
          {
            "name": "HiPeach",
            "link": "https://opeach.cn",
            "avatar": "https://opeach.cn/media/avatar.webp",
            "descr": "妙不可言"
          },
          {
            "name": "wsb",
            "link": "https://wsbblog.cn/",
            "avatar": "https://wsbblog.cn/img/wsb.webp",
            "descr": "己所不欲，勿施于人"
          },
          {
            "name": "MoyuqL",
            "descr": "MoyuqL与你同在~",
            "link": "https://blog.moyuql.top",
            "avatar": "https://alpha-q3.sourcegcdn.com/2022/12/19/ax7FLzxG.jpg"
          },
          {
            "name": "LynxCatTheThird",
            "link": "https://lynxcatthethird-person.netlify.app/",
            "avatar": "https://img.picgo.net/2023/01/01/avatar3b9a4a9ae82dbf8c.jpeg",
            "descr": "我是山猫三号，一个来自一百零三世纪的强人工智能。"
          },
          {
            "name": "雷雷屋头",
            "link": "https://ll.sc.cn",
            "avatar": "https://ll.sc.cn/img/avatar.png",
            "descr": "爱生活，爱工作，爱折腾"
          },
          {
            "name": "鹿啵包",
            "link": "https://pochacco.top/",
            "avatar": "https://pochacco.top/img/Avatar.gif",
            "descr": "落日橘子海，揽尽世间温柔"
          },
          {
            "name": "Mxne",
            "link": "https://blog.mxne.cn/",
            "avatar": "https://bu.dusays.com/2023/02/05/63df7de56a470.webp",
            "descr": "学如逆水行舟，不进则退。"
          },
          {
            "name": "南方嘉木",
            "link": "https://gavin-chen.top/",
            "avatar": "https://i.imgtg.com/2023/01/06/GZRKN.jpg",
            "descr": "不畏将来，不念过往。"
          },
          {
            "name": "青桔气球",
            "link": "https://blog.qjqq.cn/",
            "avatar": "https://avatar.qjqq.cn/1/646cdb372913c.webp!avatar",
            "descr": "分享网络安全与科技生活"
          },
          {
            "name": "杜老师说",
            "avatar": "https://cdn.dusays.com/avatar.png",
            "link": "https://dusays.com",
            "descr": "Teacher Du",
            "rss": "https://dusays.com/atom.xml"
          },
          {
            "name": "桜紺狸",
            "link": "https://www.skira.top",
            "avatar": "https://www.skira.top/img/lemonsuka.webp",
            "descr": "一个闲聊萌新动漫技术交流站"
          },
          {
            "name": "EastWind",
            "link": "www.eastwind.fun",
            "avatar": "https://www.eastwind.fun/img/pic3.jpg",
            "descr": "愿你成为自己的太阳，不需要依赖谁的光"
          },
          {
            "name": "hackcr",
            "link": "https://blog.muzilix.cn/",
            "avatar": "https://source.muzilix.cn/img/i.png",
            "descr": "路漫漫其修远兮，吾将上下而求索"
          },
          {
            "name": "微霞",
            "link": "https://yuuu.org",
            "avatar": "https://cdn.yuuu.org/img/avatar.webp",
            "descr": "水风清，晚霞明"
          }
        ]
      }
    ]
  // const friends = await getAllFriends(  )
  return <Card className="" >
    <div className="flex flex-col gap-4">
      111
    </div>
  </Card>
}