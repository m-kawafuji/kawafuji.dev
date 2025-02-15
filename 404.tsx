export const title = "Page Not Found";

export const stylesheet = "/styles/404/index.css";

export default function NotFound() {
  return (
    <main>
      <div className="l-container">
        <section className="p-errorContent">
          <h1 className="p-errorContent__title">Page Not Found</h1>
          <p className="p-errorContent__description">
            The requested page was not found.
          </p>
        </section>
      </div>
    </main>
  );
}
