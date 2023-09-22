import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Java",
      icon: "book",
      prefix: "java/",
      children: "structure",
    },
    {
      text: "Redis",
      icon: "book",
      prefix: "redis/",
      children: "structure",
    },
    "slides",
  ],
});
