import Navigation from '~/components/navigation';
import ArtisticVolume from '~/components/views/artistic-volume';
import Banners from '~/components/views/banners';
import Crafts from '~/components/views/crafts';
import Hero from '~/components/views/hero';
import Subscribe from '~/components/views/subscribe';
import Sustainability from '~/components/views/sustainability';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Banners />
      <Sustainability />
      <ArtisticVolume />
      <Crafts />
      <Subscribe />
    </main>
  );
}
