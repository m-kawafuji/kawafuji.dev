import Container from "./Container.tsx";

export default function GlobalHeader() {
  return (
    <header>
      <Container>
        <div class="py-4">
          <a
            href="/"
            class="text-[#ffdd6e] text-shadow-[0.08em_0.08em_rgb(225_15_19/80%)] font-brand transition-opacity ease-out hover:opacity-70"
          >
            Masashi Kawafuji
          </a>
        </div>
      </Container>
    </header>
  );
}
