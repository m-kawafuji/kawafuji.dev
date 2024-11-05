import path from 'node:path';
import fg from 'fast-glob';
import { getPost } from '@/lib/blog';
import Container from '@/components/Container';
import BlogHeader from '@/components/Blog/BlogHeader';
import BlogContent from '@/components/Blog/BlogContent';

export async function generateStaticParams() {
  const files = await fg('src/content/blog/*.md');
  return files.map((file) => ({
    slug: path.basename(file, path.extname(file)),
  }));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, metadata } = await getPost(`src/content/blog/${slug}.md`);

  return (
    <main>
      <Container>
        <article>
          <BlogHeader metadata={metadata} />
          <BlogContent>{content}</BlogContent>
        </article>
      </Container>
    </main>
  );
}
