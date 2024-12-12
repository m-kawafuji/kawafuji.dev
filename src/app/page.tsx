import type { Metadata } from 'next';
import Container from '@/components/Container';
import Jumbotron from '@/components/Home/Jumbotron';
import PostList from '@/components/Home/PostList';
import { BASE_URL } from '@/constants';

export const metadata: Metadata = {
  openGraph: {
    url: BASE_URL,
    type: 'website',
    siteName: 'Masashi Kawafuji',
    title: 'Masashi Kawafuji',
    description: "Masashi Kawafuji's blog",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

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
