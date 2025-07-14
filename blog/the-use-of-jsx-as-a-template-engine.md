---
title: The Use of JSX as a Template Engine
date: 2025-07-14
---

JSX is awesome. It is widely used to describe UI with JavaScript in several UI
libraries, such as React, Preact, and Solid etc. Furthermore, JSX brings us a
nicer development experience with familiar JavaScript syntax and strict type
checking using TypeScript. Recently, I've been coming across the use of JSX as a
template engine without client side interactivity. It has both advantages and
some pain points.

## JSX as a template engine

JSX can be used as a template engine converting a JSX tree to an HTML string.

```jsx
import { renderToString } from "react-dom/server";
const html = renderToString(<App />);
// => <html lang="en"><head><meta charSet="UTF-8"><title>Document</title></head><body>...
```

### Pros

JSX is a syntax extension for JavaScript. So that strict type checking for
TypeScript and autocompletion are available in IDEs and editors. And if you are
familiar with JavaScript, there are no extra syntax or directives to write loops
or conditions to learn in addition.

### Cons

Whitespace and indentation in your JSX are not preserved. HTML comments or SSI
directives can't be written like regular HTML. For example, you mostly have to
achieve that with the `dangerouslySetInnerHTML` prop in React. It requires
extra `<div>`s and it doesn't feel straightforward.

In regular HTML

```html
<!-- HTML comments -->
<!--#include virtual="/included.shtml"-->
```

In JSX

```jsx
<main>
  <div
    dangerouslySetInnerHTML={{
      __html: `
<!-- HTML comments -->
<!--#include virtual="/included.shtml"-->
`,
    }}
  />
</main>;
```

## SSX

There is an awesome JSX library
called [SSX](https://github.com/oscarotero/ssx/) designed to be used only on
server side. SSX allows you to insert raw HTML code way more easily in JSX
markup and no extra `<div>`s are required!

```jsx
<main>
  {{ __html: "<!-- HTML comments -->" }}
  {{ __html: '<!--#include virtual="/included.shtml"-->' }}
</main>;
```

## How about template engines?

There are many template engines such as EJS, Handlebars and Nunjucks etc. They
can be used to conditionally render HTML with their own dedicated tags and
directives.

For example, in Handlebars

```handlebars
{{#if condition}}
  <p>{{message}}</p>
{{/if}}

<ul>
  {{#each items}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

### Pros

Template engines can produce an HTML string as is, so that you can preserve
whitespace, indentation, HTML comments and SSI directives in the resulting HTML.
And they mostly have full control of whitespace.

### Cons

Compared to JSX, they aren't capable of static type checking, so they don't
throw errors if you write invalid HTML.

## Conclusion

The idea of using JSX as a template engine has many advantages. However, if I
need to be compliant with HTML style guides that have indentation and whitespace
rules, I'd go for template engines.
