module.exports = {
  title: "Title",
  extend: "@vuepress/theme-default",
  markdown: {
    config: md => {
      md.set({ breaks: true });
      md.use(require("markdown-it"));
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
    sidebar: [
      {
        title: "Topic Group 1",
        collapsable: true,
        children: ["/page-1a", "/page-1b", "/page-1c"]
      },
      {
        title: "Topic Group 2",
        collapsable: false,
        children: ["/page-2a", "/page-2b", "/page-2c"]
      }
    ]
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/container",
      {
        type: "cat",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ],
    [
      "@vuepress/container",
      {
        type: "dog"
      }
    ],
    [
      "@vuepress/container",
      {
        type: "fancylink",
        before: info => `<a class="fancy" href="${info}">`,
        after: "</a>"
      }
    ]
  ]
};
