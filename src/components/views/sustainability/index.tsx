import Container from '~/components/container';
import Label from './label';
import Feature from './feature';
import Button from '~/components/button';
import SvgArrowLink from '~/assets/arrow-link.svg';
import SvgArrowBroken from '~/assets/arrow-broken.svg';
import Icon from '~/components/icon';
import Image from 'next/image';
import ImgAnons from '$/static/Black - White Deer Anons 1.jpg';
import LabeledTitle from '~/components/labeled-title';
import { SECTIONS } from '~/utils';

export type SustainabilityProps = {};

const Sustainability = ({}: SustainabilityProps) => {
  return (
    <Container className="mt-36" id={SECTIONS.RECYCLING_ESSENCE}>
      <LabeledTitle title="Scented Sustainability" label="Recycling Essence" />

      <h1 className="mt-3 text-center text-2xl text-[38px] font-400 leading-tight -tracking-[2px] text-white sm:text-2xl sm:leading-tight">
        Fragrance Harmony: The
        <br className="hidden sm:block" />
        Essence of <br className="sm:hidden" />
        Sustainable Perfumes
        <br className="hidden sm:block" />
        and Recycling
      </h1>

      <div className="mt-[52px] grid min-h-[410px] grid-cols-12 grid-rows-3 gap-2 sm:mt-6 sm:h-auto sm:grid-cols-5 sm:grid-rows-[repeat(4,auto)] sm:gap-6">
        <div className="col-span-5 row-span-full flex h-full flex-col rounded-4xl border border-[#191919] p-6 sm:col-span-full sm:row-start-2 sm:row-end-3 sm:rounded-3xl">
          <div className="flex gap-2">
            {['Recycle', 'Recycled Glass'].map((i) => (
              <Label key={i}>{i}</Label>
            ))}
          </div>

          <div className="mt-auto px-4 sm:mt-8 sm:px-0">
            <p className="text-sm font-500 leading-tight text-[#989898] sm:text-xs">
              A Symphony of Eco-Conscious Elegance and Artistic Brilliance for a
              Greener Tomorrow.
            </p>

            <h6 className="mt-4 text-[32px] font-500 leading-tight text-white sm:mt-3 sm:text-lg sm:leading-tight">
              Reviving Beauty: Sustainable Crafting with Recycled Glass
            </h6>
          </div>
        </div>

        <div className="col-span-4 col-start-6 row-span-2 h-full rounded-4xl bg-[#090909] p-6 sm:col-span-full sm:row-start-1 sm:row-end-2 sm:h-auto sm:rounded-3xl sm:p-2">
          <div className="space-y-4 sm:space-y-2">
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

        <div className="relative col-span-4 col-start-6 row-span-1 h-full overflow-hidden rounded-4xl border border-[#191919] p-6 sm:col-span-full sm:row-start-4 sm:row-end-5 sm:rounded-3xl sm:p-4">
          <h6 className="text-xl font-500 text-white sm:text-lg">
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

          <Icon className="absolute bottom-0 right-12 translate-y-1 text-white">
            <SvgArrowBroken />
          </Icon>
        </div>

        <div className="col-span-3 col-start-10 row-span-full h-full rounded-4xl bg-[#090909] p-8 text-center sm:col-span-full sm:row-start-3 sm:row-end-4 sm:rounded-3xl sm:p-4">
          <div>
            <Image
              src={ImgAnons}
              placeholder="blur"
              alt="White Deer | Anons"
              className="h-48 w-full rounded-3xl object-cover object-center"
            />
          </div>
          <h1 className="mt-6 text-[28px] font-500 tracking-[-2px] text-white sm:text-left sm:text-base sm:tracking-normal">
            Breathtaking Aromas
          </h1>
          <p className="mt-4 text-sm font-500 text-[#989898] sm:mt-2 sm:text-left sm:text-xs">
            Elevate Your Space with <br className="sm:hidden" />
            Captivating Scents, Transforming <br className="sm:hidden" />
            Every Moment into a Serenade of <br className="sm:hidden" />
            Serenity.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Sustainability;
