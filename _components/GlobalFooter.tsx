export default function GlobalFooter() {
  return (
    <footer class="l-globalFooter">
      <div class="l-container">
        <div class="l-globalFooter__inner">
          <ul class="l-globalFooter__socialLinks">
            <li class="l-globalFooter__socialLinkWrapper">
              <a
                href="https://github.com/m-kawafuji"
                target="_blank"
                class="l-globalFooter__socialLink"
              >
                <img src="/github.svg" alt="GitHub" width={32} height={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
