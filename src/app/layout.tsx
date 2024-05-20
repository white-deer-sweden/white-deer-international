import type { Metadata } from 'next';
import './globals.css';
import fonts from '~/fonts';
import MenuAnim from '~/components/menu/menu-anim';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'White Deer',
  description: '”Harmony Nature: Embrace Organic Elegance in Home and Décor“',
  metadataBase: new URL('https://www.whitedeersweden.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.classNames} bg-[#030303]`}>
        <Providers>
          <MenuAnim />
          {children}
        </Providers>
      </body>
    </html>
  );
}
