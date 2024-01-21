import Container from '~/components/container';
import Label from './label';
import Feature from './feature';
import Button from '~/components/button';
import SvgArrowLink from '~/assets/arrow-link.svg';
import SvgArrowBroken from '~/assets/arrow-broken.svg';
import Icon from '~/components/icon';
import Image from 'next/image';
import ImgAnons from '$/static/Black - White Deer Anons 1.jpg';

export type SustainabilityProps = {};

const Sustainability = ({}: SustainabilityProps) => {
  return (
    <Container className="mt-36">
      <div className="flex justify-center gap-2">
        <h1 className="text-[#989898]">Scented Sustainability</h1>
        <span className="flex h-[26px] items-center justify-center rounded-full border border-[#191919] px-4 py-2 text-[8px] text-white">
          Recycling Essence
        </span>
      </div>

      <h1 className="mt-3 text-center text-display-1 font-400 -tracking-[2px] text-white">
        Fragrance Harmony: The Essence of <br />
        Sustainable Perfumes and Recycling
      </h1>

      <div className="mt-[52px] grid h-[410px] grid-cols-12 grid-rows-3 gap-2">
        <div className="col-span-5 row-span-full flex h-full flex-col rounded-4xl border border-[#191919] p-6">
          <div className="flex gap-2">
            {['Recycle', 'Recycled Glass'].map((i) => (
              <Label key={i}>{i}</Label>
            ))}
          </div>

          <div className="mt-auto px-4">
            <p className="text-sm text-[#989898]">
              A Symphony of Eco-Conscious Elegance and Artistic Brilliance for a
              Greener Tomorrow.
            </p>

            <h6 className="mt-4 text-[32px] font-500 text-white">
              Reviving Beauty: Sustainable Crafting with Recycled Glass
            </h6>
          </div>
        </div>

        <div className="col-span-4 col-start-6 row-span-2 h-full rounded-4xl bg-[#090909] p-6">
          <div className="space-y-4">
            {[
              {
                title: 'Natural Notes: Candle Fragrances',
                description:
                  'Explore the enchanting world of natural scents in candles, where...',
              },
              {
                title: 'Aromatic Mastery in Candles',
                description:
                  'Uncover the artistry behind natural fragrances in candles, as we delve...',
              },
            ].map((kf) => (
              <Feature key={kf.title} {...kf} />
            ))}
          </div>
        </div>

        <div className="relative col-span-4 col-start-6 row-span-1 h-full overflow-hidden rounded-4xl border border-[#191919] p-6">
          <h6 className="text-xl font-500 text-white">
            Radiant Choices: Candle Selection
          </h6>

          <Button
            className="mt-3"
            variant="primary"
            size="default-icon"
            icon={<SvgArrowLink />}
            rounded="full"
          >
            Contact us
          </Button>

          <Icon className="absolute bottom-0 right-12 translate-y-3 text-white">
            <SvgArrowBroken />
          </Icon>
        </div>

        <div className="col-span-3 col-start-10 row-span-full h-full rounded-4xl bg-[#090909] p-8">
          <div>
            <Image
              src={ImgAnons}
              placeholder="blur"
              alt="White Deer | Anons"
              className="w-full rounded-3xl"
            />
          </div>
          <h1 className="mt-6 text-display-2 font-500 -tracking-[2px] text-white">
            Breathtaking Aromas
          </h1>
          <p className="mt-4 text-sm font-500 text-[#989898]">
            Elevate Your Space with Captivating Scents, Transforming Every
            Moment into a Serenade of Serenity.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Sustainability;
