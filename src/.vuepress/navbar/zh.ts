import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "主页",
    icon: "lightbulb",
    link: "/",
  },
  "/java/",
  "/books/",
  {
    text: "数据库",
    icon: "lightbulb",
    link: "/dbs/",
  },
  {
    text: "Linux",
    icon: "lightbulb",
    link: "/linux/",
  },
  {
    text: "面试",
    icon: "lightbulb",
    link: "/interview/",
  },
  {
    text: "LeetCode",
    icon: "lightbulb",
    prefix: "/leetcode/",
    children: [
      {
        text: "Daily",
        icon: "lightbulb",
        link: "daily/",
      },
      {
        text: "Leetcode-75",
        icon: "lightbulb",
        link: "leetcode-75/",
      },
    ],
  },
]);
