import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "lightbulb",
    link: "/",
  },
  "/Java/",
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