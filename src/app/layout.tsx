import type { Metadata } from 'next';
import './globals.css';
import fonts from '~/fonts';

export const metadata: Metadata = {
  title: 'White Deer',
  description: '”Harmony Nature: Embrace Organic Elegance in Home and Décor“',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.classNames} bg-[#030303]`}>{children}</body>
    </html>
  );
}
