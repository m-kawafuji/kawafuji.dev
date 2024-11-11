import type { Metadata } from 'next';
import { Rasa, Wendy_One } from 'next/font/google';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './layout.module.scss';
import 'minireset.css';
import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Masashi Kawafuji',
  description: "Masashi Kawafuji's blog",
};

const rasa = Rasa({
  subsets: ['latin'],
  variable: '--font-family-serif',
});

const wendyOne = Wendy_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-family-display',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(styles.layout, rasa.variable, wendyOne.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
