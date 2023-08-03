import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "lightbulb",
    link: "/",
  },
  {
    text: "Java",
    icon: "lightbulb",
    link: "/java/",
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