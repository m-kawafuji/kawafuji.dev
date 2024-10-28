import type { Metadata } from 'next';
import 'minireset.css';
import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Masashi Kawafuji',
  description: "Masashi Kawafuji's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
