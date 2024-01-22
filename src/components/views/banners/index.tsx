import Container from '~/components/container';
import Banner from './banner';
import Button from '~/components/button';
import SvgArrowLink from '~/assets/arrow-link.svg';
import { getImageProps } from 'next/image';
import ImgDeerBanner from '$/static/white-deer-banner.jpg';
import ImgModelA1 from '$/static/MODEL A 1.jpg';
import BlurItem from './blur-item';

export type BannersProps = {};

const Banners = async ({}: BannersProps) => {
  const {
    props: { src: whiteDeerBannerSrc },
  } = getImageProps({
    alt: 'White Deer',
    sizes: '100vw',
    quality: 90,
    placeholder: 'blur',
    src: ImgDeerBanner,
  });

  const {
    props: { src: bannerModelA1 },
  } = getImageProps({
    alt: 'White Deer',
    sizes: '100vw',
    quality: 90,
    placeholder: 'blur',
    src: ImgModelA1,
  });

  return (
    <Container className="mt-[70px]">
      <div className="mb-3 flex justify-end">
        <div className="flex h-[42px] items-center gap-2 rounded-full border border-[#191919] px-6 py-3 font-600 text-white">
          White Deer Sweden
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
        </div>
      </div>

      <div className="grid h-[400px] grid-cols-12 grid-rows-2 gap-2">
        <Banner className="col-span-3 row-span-full bg-[#0D0D0D]">
          <div className="relative h-full text-center">
            <div className="w-full absolute-center">
              <h2 className="text-[28px] font-500 text-white">
                ”Crafting Dreams, Empowering Hands “
              </h2>
              <p className="mt-12 text-sm font-500 text-[#989898]">
                Elevate Your Lifestyle with <br />
                Handcrafted Excellence and <br />
                Artisanal Passion.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
              <Button
                className="w-full"
                variant="primary"
                size="default-icon"
                icon={<SvgArrowLink />}
                rounded="full"
              >
                Contact us
              </Button>
            </div>
          </div>
        </Banner>

        <Banner
          className="col-span-5 row-span-full flex justify-end bg-cover bg-center"
          style={{ backgroundImage: `url(${whiteDeerBannerSrc})` }}
        >
          <div className="flex gap-2">
            {['Candle', 'Décor', 'Handicrafts'].map((bi) => (
              <BlurItem key={bi}>{bi}</BlurItem>
            ))}
          </div>
        </Banner>

        <Banner
          className="col-span-4 row-span-1 flex h-full justify-end bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerModelA1})` }}
        />

        <Banner className="relative col-span-4 row-span-1 h-full bg-[#0D0D0D]">
          <div className="h-40 w-40 rounded-full bg-[#1A1A1A] absolute-center" />
          <div className="absolute bottom-10 left-11">
            <Button
              variant="primary"
              size="default-icon"
              icon={<SvgArrowLink />}
              rounded="full"
            >
              Contact us
            </Button>
          </div>
        </Banner>
      </div>
    </Container>
  );
};

export default Banners;
