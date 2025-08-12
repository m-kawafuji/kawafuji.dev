import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import metas from "lume/plugins/metas.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import Shiki from "@shikijs/markdown-it";

const site = lume({
  location: new URL("https://kawafuji.dev"),
}, {
  markdown: {
    plugins: [
      await Shiki({
        theme: "github-dark",
      }),
    ],
  },
});

site.add("static", ".");
site.add("styles.css");

site.use(jsx());
site.use(metas());
site.use(tailwindcss());

export default site;
