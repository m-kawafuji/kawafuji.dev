import Container from '@/components/Container';
import styles from './index.module.scss';

export default function Jumbotron() {
  return (
    <div className={styles.container}>
      <Container>
        <section className={styles.inner}>
          <h1 className={styles.title}>
            Welcome to
            <br />
            Masashi Kawafuji&apos;s Blog
          </h1>
          <p className={styles.description}>
            This is my personal blog where I mainly write about web development.
          </p>
        </section>
      </Container>
    </div>
  );
}
