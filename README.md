---
pageClass: custom-page-class

---



# Documentation
Running a spike for the new docs site. Writing docs for the docs.
[[toc]]

## Custom container
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
::: note Note
If you return a status other than 200 or 204 from one of the event functions shown above, the signup or login for your users will.
:::

### Warning
::: warning
This is a warning
:::

### Danger
::: danger DANGER
This is a danger warning
:::


### Fancy link widget
Similar to what we did with the code block, you can also create a custom link widget using the custom container plug-in in the config.js file.
For example:
::: fancylink https://whatever.com
Check out the fancy world
:::

# Documentation
Running a spike to test VuePress for the new docs site. Writing the docs for the docs.

<!-- <span class="toc-title">on this page</span> -->


## Markdown table
| Tables        | Are           | Cool  |
| ------------- |:-------------:| ----- |
| col 3 is      | right-aligned | Non eiusmod eiusmod do nulla. |
| col 2 is      | centered      | Sint proident in veniam cupidatat fugiat et occaecat amet velit excepteur mollit anim ut. |
| zebra stripes | are neat      | Sit anim reprehenderit in nisi ad voluptate do consequat officia. |
| Hawaiian spam | are tasty     | Aliqua esse sit sunt aliqua laboris elit elit non. |

## Left side bar
:::tip
Can't seem to modify the CSS in `index.styl` file for the side bar component.
Modify it in the `theme.styl` file works.
:::

## Right side bar
The right side bar is implemented as a built in table of content – add `[[toc]]` in the markdown file.
The problem is it can't use the [`active-header-links`](https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html#install) plug-in directedly.
What we could do is to simulate the plug-in function and add it to the table of content widget.


## Collapsable side bar
The build-in side bar has `collapsable` set to be false by default, change it to `true` in the config file under `themeConfig.sidebar.collapasable`.

## External data
We can use [extendPageData](https://v1.vuepress.vuejs.org/plugin/option-api.html#extendpagedata) plug-in to modify the `$page` object and inject additional data to the components.

## Algolia search

## Was this helpful?