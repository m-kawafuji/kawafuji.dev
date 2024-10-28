import Container from '@/components/Container';
import styles from './index.module.scss';
import github from './github.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.inner}>
          <ul className={styles.socialLinks}>
            <li className={styles.socialLinkWrapper}>
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
