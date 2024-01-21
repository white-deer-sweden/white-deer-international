import Navigation from '~/components/navigation';
import Banners from '~/components/views/banners';
import Hero from '~/components/views/hero';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Banners />
    </main>
  );
}
