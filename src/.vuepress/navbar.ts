import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "Java",
    icon: "lightbulb",
    prefix: "/java/"
  },
  {
    text: "LeetCode",
    icon: "lightbulb",
    prefix: "/leetcode/",
    children: [
      {
        text: "Daily",
        icon: "lightbulb",
        prefix: "daily/"
      },
      {
        text: "Leetcode-75",
        icon: "lightbulb",
        prefix: "leetcode-75/"
      }
    ],
  }
]);
