import Container from "./Container.tsx";

export default function GlobalHeader() {
  return (
    <header class="border-b border-gray-300">
      <Container>
        <div class="py-4">
          <a
            href="/"
            class="text-xl font-calligraphy transition-opacity ease-out hover:opacity-70"
          >
            Masashi Kawafuji
          </a>
        </div>
      </Container>
    </header>
  );
}
