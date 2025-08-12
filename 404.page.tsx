export const title = "Page Not Found";

export const metas: Lume.Data["metas"] = {
  title: (data) => data.title + " | Masashi Kawafuji",
};

export default function NotFound({ comp }: Lume.Data) {
  return (
    <main>
      <comp.Container>
        <section class="py-16 text-center">
          <h1 class="text-3xl font-extrabold">Page Not Found</h1>
          <p class="mt-2 text-gray-400">
            The requested page was not found.
          </p>
        </section>
      </comp.Container>
    </main>
  );
}
