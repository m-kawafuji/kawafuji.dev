import Container from "./Container.tsx";

export default function GlobalFooter() {
  return (
    <footer>
      <Container>
        <div class="py-4">
          <ul class="flex justify-center" role="list">
            <li class="w-8">
              <a
                href="https://github.com/m-kawafuji"
                target="_blank"
                class="transition-opacity ease-out hover:opacity-70"
              >
                <img src="/github.svg" alt="GitHub" width={32} height={32} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
