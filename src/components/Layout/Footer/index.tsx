import Container from '@/components/Common/Container';
import styles from './index.module.scss';
import github from './github.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Container>
        <div className={styles.inner}>
          <ul className={styles.socials}>
            <li className={styles.social}>
              <a
                href="https://github.com/m-kawafuji"
                target="_blank"
                className={styles.socialLink}
              >
                <Image src={github} alt="GitHub" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
