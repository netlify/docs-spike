---
pageClass: custom-page-class
---

# Netlify docs 1.0
Qui id tempor fugiat dolor do labore ipsum qui enim ex reprehenderit cupidatat mollit. Laboris nostrud nostrud anim do adipisicing amet eu culpa. Ut cupidatat amet exercitation nisi dolor amet cillum. Consectetur tempor quis Lorem ad mollit nostrud mollit eiusmod minim.

<span class="toc-title">on this page</span>

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
        type: "cupcake"
      }
  ],
```
3. Add custom style to the new container inside `index.styl` file
4. Use custom container in markdown file:
```
::: cupcake
This is a cupcake
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
::: danger STOP
Danger zone, do not proceed
:::

### Danger

## Code block
VuePress uses [Prism](https://prismjs.com/) to highlight language syntax in markdown code blocks, using coloured text. Prism supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:


``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

## Fancy link widget
Similar to what we did with the code block, you can also create a custom link widget using the custom container plug-in in the config.js file.
For example:
::: fancylink https://whatever.com
Check out the fancy world
:::

## Markdown table
| Tables        | Are           | Cool  |
| ------------- |:-------------:| ----- |
| col 3 is      | right-aligned | Non eiusmod eiusmod do nulla. |
| col 2 is      | centered      | Sint proident in veniam cupidatat fugiat et occaecat amet velit excepteur mollit anim ut. |
| zebra stripes | are neat      | Sit anim reprehenderit in nisi ad voluptate do consequat officia. |
| Hawaiian spam | are tasty     | Aliqua esse sit sunt aliqua laboris elit elit non. |

## Ex nisi fugiat
Officia magna occaecat tempor aliquip. Mollit laborum mollit in ex incididunt irure do. Veniam enim consectetur ad magna adipisicing eu dolore aliquip id in do mollit. Sint consectetur magna proident laboris ut eu id quis eiusmod tempor commodo sint consequat. Dolor proident aliqua eiusmod deserunt reprehenderit ullamco reprehenderit. Cillum non elit non voluptate laborum aute non.

## Ipsum consectetur
Tempor elit aliqua anim ipsum do consectetur id nisi. Non Lorem eu eu cillum sunt. Minim aliquip id magna sit commodo laborum ipsum sit eu veniam esse sunt nostrud. Ad est excepteur duis ea incididunt ut. Occaecat dolor in ullamco dolor esse laborum aliquip est nisi veniam do proident dolor. Dolor Lorem consectetur elit officia duis aliqua quis magna magna ea. Officia id veniam laborum eiusmod nulla tempor in nisi in.

