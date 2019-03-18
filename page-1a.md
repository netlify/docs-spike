---
sidebarDepth: 2
---

# Custom container
Custom container allows you to add tips and warnings to the page using VuePress shortcode. See more details via [VuePress docs](https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers).
Steps to add a custom container:
1. Go to `config.js` file
2. Add code block under the `Plugins` section, for example:
  ```
  [
    "@vuepress/container",
    {
      type: "cake"
    }
  ],
```
3. Add custom style to the new container inside `index.styl` file
4. Use custom container in markdown file. By default, the container title is the captalized version of the container name, you can change the title by adding a custom title after the container name:
```
::: cake cheesecake
This is a cheesecake
:::
```

## Notification banners
### Note
Dolore tempor laborum consequat sint sint nisi anim amet consectetur adipisicing magna quis esse occaecat. Eu fugiat et quis elit eiusmod proident. Pariatur anim proident nostrud sint enim. Ea pariatur consectetur nisi anim.
::: note Note
If you return a status other than 200 or 204 from one of the event functions shown above, the signup or login for your users will.
:::

### Warning
Excepteur aute labore in in nulla non. Et labore nisi ex reprehenderit in aliqua nostrud. Laborum quis nisi est tempor eu in quis est nulla incididunt. Sit ipsum sunt voluptate mollit qui ut aliqua id est anim enim.
::: warning
This is a warning
:::

### Danger
Qui quis aliqua incididunt fugiat irure eu est voluptate. Qui nostrud quis ea ex elit. Proident proident mollit eiusmod qui in ad minim proident incididunt occaecat excepteur sint aliquip. Aliqua velit ex tempor eu culpa laboris nostrud est enim. Eu aute enim pariatur ipsum eu labore. Sit tempor dolore ipsum adipisicing veniam elit id laboris. Proident non reprehenderit eu adipisicing amet aliqua proident velit non.
::: danger STOP
Danger zone, do not proceed
:::

### Fancy link widget
Similar to what we did with the code block, you can also create a custom link widget using the custom container plug-in in the config.js file.
For example:
::: fancylink https://whatever.com
Check out the fancy world
:::