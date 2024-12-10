import Container from '@/components/Container';
import Jumbotron from '@/components/Home/Jumbotron';
import PostList from '@/components/Home/PostList';

export default function Home() {
  return (
    <main>
      <Container>
        <Jumbotron />
        <PostList />
      </Container>
    </main>
  );
}
