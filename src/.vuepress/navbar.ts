import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "lightbulb",
    link: "/",
  },
  "/java/",
  {
    text: "Redis",
    icon: "lightbulb",
    link: "/redis/",
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