import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "一切为了更好的自己",
  description: "憨憨十二的Docs",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
