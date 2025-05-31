export const title = "Page Not Found";

export const stylesheet = "/styles/404/index.css";

export const metas: Lume.Data["metas"] = {
  title: (data) => data.title + " | Masashi Kawafuji",
};

export default function NotFound() {
  return (
    <main>
      <div class="l-container">
        <section class="p-errorContent">
          <h1 class="p-errorContent__title">Page Not Found</h1>
          <p class="p-errorContent__description">
            The requested page was not found.
          </p>
        </section>
      </div>
    </main>
  );
}
