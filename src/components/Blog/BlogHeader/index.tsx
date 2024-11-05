import type { BlogMetadata } from '@/lib/blog';
import styles from './index.module.scss';
import { format } from 'date-fns';

export default function BlogHeader({ metadata }: { metadata: BlogMetadata }) {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{metadata.title}</h1>
      <p className={styles.date}>
        <time dateTime={metadata.date}>{format(metadata.date, 'PPP')}</time>
      </p>
    </header>
  );
}
