import type { Metadata } from 'next';
import { Rasa, Wendy_One } from 'next/font/google';
import clsx from 'clsx';
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
      <body className={clsx(rasa.variable, wendyOne.variable)}>{children}</body>
    </html>
  );
}
