import Link from 'next/link';
import fg from 'fast-glob';
import { format } from 'date-fns';
import { getPost } from '@/lib/blog';
import styles from './index.module.scss';

export default async function PostList() {
  const files = await fg('src/content/blog/*.md');
  const posts = await Promise.all(files.map(getPost));

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <article key={post.metadata.slug}>
          <h3 className={styles.title}>
            <Link href={`/blog/${post.metadata.slug}/`} className={styles.link}>
              {post.metadata.title}
            </Link>
          </h3>
          <p className={styles.date}>
            <time dateTime={post.metadata.date}>
              {format(post.metadata.date, 'PPP')}
            </time>
          </p>
        </article>
      ))}
    </div>
  );
}
