import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import sass from "lume/plugins/sass.ts";
import metas from "lume/plugins/metas.ts";
import Shiki from "@shikijs/markdown-it";

const site = lume({
  location: new URL("https://kawafuji.dev"),
}, {
  markdown: {
    plugins: [
      await Shiki({
        theme: "github-dark-high-contrast",
      }),
    ],
  },
});

site.add("static", ".");
site.add([".scss"]);

site.use(jsx());
site.use(sass());
site.use(metas());

export default site;
