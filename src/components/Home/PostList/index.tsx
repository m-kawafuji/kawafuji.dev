import Link from 'next/link';
import fg from 'fast-glob';
import { compareDesc } from 'date-fns';
import { getPost } from '@/lib/blog';
import FormattedDate from '@/components/Common/FormattedDate';
import styles from './index.module.scss';

export default async function PostList() {
  const files = await fg('src/content/blog/*.md');
  const posts = await Promise.all(files.map(getPost));

  posts.sort((a, b) => compareDesc(a.metadata.date, b.metadata.date));

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <article key={post.metadata.slug}>
          <h2 className={styles.title}>
            <Link href={`/blog/${post.metadata.slug}/`} className={styles.link}>
              {post.metadata.title}
            </Link>
          </h2>
          <p className={styles.date}>
            <FormattedDate date={post.metadata.date} />
          </p>
        </article>
      ))}
    </div>
  );
}
