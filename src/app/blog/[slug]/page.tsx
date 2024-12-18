import type { Metadata } from 'next';
import { BASE_URL } from '@/constants';
import path from 'node:path';
import fg from 'fast-glob';
import { getPost } from '@/lib/blog';
import Container from '@/components/Common/Container';
import FormattedDate from '@/components/Common/FormattedDate';
import styles from './page.module.scss';

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPost(`src/content/blog/${slug}.md`);
  const url = new URL(`/blog/${slug}/`, BASE_URL).toString();

  return {
    title: metadata.title,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      type: 'website',
      siteName: 'Masashi Kawafuji',
      title: 'Masashi Kawafuji',
      description: "Masashi Kawafuji's blog",
    },
  };
}

export async function generateStaticParams() {
  const files = await fg('src/content/blog/*.md');
  return files.map((file) => ({
    slug: path.basename(file, path.extname(file)),
  }));
}

export default async function Blog({ params }: BlogPageProps) {
  const { slug } = await params;
  const { content, metadata } = await getPost(`src/content/blog/${slug}.md`);

  return (
    <main>
      <Container>
        <article className={styles.inner}>
          <header className={styles.header}>
            <h1 className={styles.title}>{metadata.title}</h1>
            <p className={styles.date}>
              <FormattedDate date={metadata.date} />
            </p>
          </header>
          <section className={styles.content}>{content}</section>
        </article>
      </Container>
    </main>
  );
}
