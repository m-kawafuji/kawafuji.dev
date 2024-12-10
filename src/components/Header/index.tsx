import Link from 'next/link';
import Container from '@/components/Container';
import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.container}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.home}>
            Masashi Kawafuji
          </Link>
        </div>
      </Container>
    </header>
  );
}
