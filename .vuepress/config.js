module.exports = {
  title: "Title",
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
    [
      "@vuepress/plugin-container",
      {
        type: "cat"
      }
    ]
  ]
};
