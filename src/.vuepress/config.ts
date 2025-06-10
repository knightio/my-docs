import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-docs/",

  markdown:{
    headers:{
      level:[2,3,4],
    }
  },

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "一切为了更好的自己",
      description: "憨憨十二的Docs",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
