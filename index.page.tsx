import { compareDesc } from "date-fns";

export const title = "Masashi Kawafuji";

export default function Home({ comp, search }: Lume.Data) {
  const posts = search.pages("post");

  posts.sort((a, b) => compareDesc(a.date, b.date));

  return (
    <main>
      <comp.Container>
        <section class="py-8 text-center">
          <h1 class="py-16 text-5xl text-[#ffdd6e] text-shadow-[0.08em_0.08em_rgb(225_15_19/80%)] font-brand bg-radial-[closest-side,rgb(255_255_255/25%),rgb(115_115_255/0%)]">
            Masashi Kawafuji
          </h1>
          <p class="-mt-4">
            This is my personal blog where<br />
            I mainly write about web development.
          </p>
        </section>

        <section class="py-16">
          <h2 class="w-fit mx-auto font-brand text-4xl text-center">
            Posts
          </h2>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-6 mt-8">
            {posts.map((post) => (
              <article class="relative p-8">
                <h3 class="text-xl font-bold">
                  <a
                    href={post.url}
                    class="hover:underline before:absolute before:inset-0"
                  >
                    {post.title}
                  </a>
                </h3>
                <p class="mt-4 text-sm">
                  <comp.Time datetime={post.date} />
                </p>
                <div class="absolute inset-x-[5px] inset-y-0 border-x border-y-2 border-gray-400 pointer-events-none" />
                <div class="absolute inset-x-0 inset-y-[5px] border-x-2 border-y border-gray-400 pointer-events-none" />
              </article>
            ))}
          </div>
        </section>
      </comp.Container>
    </main>
  );
}
