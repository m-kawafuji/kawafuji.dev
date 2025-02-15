export const layout = "layouts/BlogLayout.tsx";

export const tags = ["post"];

export const stylesheet = "/styles/blog/index.css";

export const metas: Lume.Data["metas"] = {
  title: (data) => data.title + " | Masashi Kawafuji",
};
