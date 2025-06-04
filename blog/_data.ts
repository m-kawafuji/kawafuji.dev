export const layout = "layouts/BlogLayout.tsx";

export const tags = ["post"];

export const metas: Lume.Data["metas"] = {
  title: (data) => data.title + " | Masashi Kawafuji",
};
