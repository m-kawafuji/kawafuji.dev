export const layout = "layouts/GlobalLayout.tsx";

export default function BlogLayout({ children, comp, date, title }: Lume.Data) {
  return (
    <main>
      <div class="l-container">
        <article class="p-blogContent">
          <header class="p-blogContent__header">
            <h1 class="p-blogContent__title">{title}</h1>
            <p class="p-blogContent__date">
              <comp.Time datetime={date} />
            </p>
          </header>
          <section class="p-blogContent__body">
            {children}
          </section>
        </article>
      </div>
    </main>
  );
}
