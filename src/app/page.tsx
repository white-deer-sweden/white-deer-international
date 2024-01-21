import Navigation from '~/components/navigation';
import Banners from '~/components/views/banners';
import Hero from '~/components/views/hero';
import Sustainability from '~/components/views/sustainability';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Banners />
      <Sustainability />
    </main>
  );
}
