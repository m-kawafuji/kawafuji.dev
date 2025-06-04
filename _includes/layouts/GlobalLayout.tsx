export default function GlobalLayout(
  { children, comp, url, title }: Lume.Data,
) {
  if (url !== "/") {
    title += " | Masashi Kawafuji";
  }

  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Knewave&display=swap"
            rel="stylesheet"
          />
        </head>
        <body class="grid grid-rows-[auto_1fr_auto]">
          <comp.GlobalHeader />
          {children}
          <comp.GlobalFooter />
        </body>
      </html>
    </>
  );
}
