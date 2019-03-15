module.exports = {
  title: "Title",
  extend: "@vuepress/theme-default",
  markdown: {
    config: md => {
      md.set({ breaks: true });
      md.use(
        require("markdown-it-anchor", {
          permalink: true,
          permalinkClass: "header-anchor",
          permalinkSymbol: "*"
        })
      );
      md.use(require("markdown-it-include"));
      md.render(
        "!!!include(dog-left.md)!!!\n\n*your content*\n\n!!!include(dog-right.md)!!!"
      );
    }
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: "Page 1A", link: "/page-1a.html" },
      { text: "Page 1B", link: "/page-1b.html" }
    ],
    sidebar: [
      {
        title: "Topic Group 1",
        collapsable: false,
        children: ["/page-1a", "/page-1b", "/page-1c"]
      }
    ]
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/plugin-container",
      {
        type: "cat"
      }
    ],
    [
      "@vuepress/container",
      {
        type: "dog"
      }
    ]
  ]
};
