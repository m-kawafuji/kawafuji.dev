import Container from '@/components/Container';
import Jumbotron from '@/components/Home/Jumbotron';
import Section from '@/components/Home/Section';
import PostList from '@/components/Home/PostList';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <Container>
        <Jumbotron />
        <div className={styles.sections}>
          <Section title="Posts">
            <PostList />
          </Section>
        </div>
      </Container>
    </main>
  );
}
