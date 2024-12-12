import type { Metadata } from 'next';
import { Jost, Knewave } from 'next/font/google';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './layout.module.scss';
import 'minireset.css';
import '@/styles/index.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | Masashi Kawafuji',
    default: 'Masashi Kawafuji',
  },
  description: "Masashi Kawafuji's blog",
};

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-family-sans-seif',
});

const knewave = Knewave({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-family-calligraphy',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(styles.layout, jost.variable, knewave.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
