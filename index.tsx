import { compareDesc } from "date-fns";

export const title = "Masashi Kawafuji";

export const stylesheet = "/styles/index.css";

export default function Home({ comp, search }: Lume.Data) {
  const posts = search.pages("post");

  posts.sort((a, b) => compareDesc(a.date, b.date));

  return (
    <main>
      <div class="l-container">
        <section class="p-jumbotron">
          <h1 class="p-jumbotron__title">
            Welcome to
            <br />
            Masashi Kawafuji&apos;s Blog
          </h1>
          <p class="p-jumbotron__description">
            This is my personal blog where I mainly write about web development.
          </p>
        </section>

        <div class="p-teasers">
          {posts.map((post) => (
            <article class="p-teasers__item">
              <h2 class="p-teasers__title">
                <a href={post.url} class="p-teasers__link">
                  {post.title}
                </a>
              </h2>
              <p class="p-teasers__date">
                <comp.Time datetime={post.date} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
