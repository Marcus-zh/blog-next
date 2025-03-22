import type Config from "@/interface/config";

export const Config: Config = {
  info: {
    siteName: "Marcus的小站",
    author: "Marcus",
    description: "feedId:72882646932738048+userId:72617922693905408",
    siteUrl: "https://blog.marcus233.top",
    avatar: "/avatar.png",
    icon: "/favicon.ico",
    favicon: "/favicon.ico",
    copyright: "CC BY-NC-SA 4.0",
    generator: "Nextjs/14.2.5",
  },
  social: {
    email: "marcus-zh@qq.com",
    github: "https://github.com/marcus-zh",
  },
  aside: {
    home: {
      left: ["Logo", "Search", "Tags"],
      right: ["Info"],
    },
    posts: {
      left: ["Logo", "Search", "Tags"],
      right: ["Toc", "Info"],
    },
    friends: {
      left: ["Logo", "Search", "Tags"],
      right: ["Info"],
    },
  },
  footer: {
    left: {
      year: 2022,
      links: [
        { name: "RSS", url: "/atom.xml"},
        { name: "GitHub", url: "https://github.com/Marcus-zh" }
      ],
      icp: {name: "萌ICP备20230221号",url: "https://icp.gov.moe/?keyword=20230221"}
    },
    right: {
      themeSwitch: true,
    },
  },
  waline: {
    serverURL: "https://waline.marcus233.top",
    path: "",
    requiredMeta: ["nick", "mail"],
    meta: ["nick", "mail", "link"],
    wordLimit: 100,
    lang: "zh-CN",
    dark: "auto",
    reaction: [],
  },
};
