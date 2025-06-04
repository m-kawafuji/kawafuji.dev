import { compareDesc } from "date-fns";

export const title = "Masashi Kawafuji";

export default function Home({ comp, search }: Lume.Data) {
  const posts = search.pages("post");

  posts.sort((a, b) => compareDesc(a.date, b.date));

  return (
    <main>
      <comp.Container>
        <section class="py-8 text-center">
          <h1 class="text-3xl leading-[1.25] font-extrabold">
            Welcome to
            <br />
            Masashi Kawafuji&apos;s Blog
          </h1>
          <p class="mt-3 text-gray-600">
            This is my personal blog where I mainly write about web development.
          </p>
        </section>

        <div class="flex flex-col gap-8 py-8">
          {posts.map((post) => (
            <article>
              <h2 class="text-2xl font-extrabold leading-[1.25]">
                <a href={post.url} class="hover:underline">
                  {post.title}
                </a>
              </h2>
              <p class="mt-1 text-gray-600">
                <comp.Time datetime={post.date} />
              </p>
            </article>
          ))}
        </div>
      </comp.Container>
    </main>
  );
}
