import path from 'node:path';
import fg from 'fast-glob';
import { getPost } from '@/lib/blog';
import Container from '@/components/Container';
import styles from './page.module.scss';
import { format } from 'date-fns';

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
        <article className={styles.inner}>
          <header className={styles.header}>
            <h1 className={styles.title}>{metadata.title}</h1>
            <p className={styles.date}>
              <time dateTime={metadata.date}>
                {format(metadata.date, 'PPP')}
              </time>
            </p>
          </header>
          <section className={styles.content}>{content}</section>
        </article>
      </Container>
    </main>
  );
}
