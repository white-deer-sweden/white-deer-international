import Container from '~/components/container';
import Banner from './banner';
import Button from '~/components/button';
import SvgArrowLink from '~/assets/arrow-link.svg';
import { getImageProps } from 'next/image';
import ImgDeerBanner from '$/static/white-deer-banner.jpg';
import ImgModelA1 from '$/static/MODEL A 1.jpg';
import BlurItem from './blur-item';
import { SECTIONS } from '~/utils';

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
    <Container className="mt-[70px] sm:mt-10" id={SECTIONS.BRAND}>
      <div className="mb-3 flex justify-end sm:hidden">
        <div className="relative flex h-[42px] items-center gap-2 rounded-full border border-[#191919] px-6 py-3 font-600 text-white">
          White Deer Sweden
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white" />
          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            <span className="inline-block h-2.5 w-2.5 animate-ping rounded-full bg-white " />
          </div>
        </div>
      </div>

      <div className="grid h-[400px] grid-cols-12 grid-rows-2 gap-2 sm:h-auto sm:grid-cols-5 sm:grid-rows-none sm:gap-6">
        <Banner className="col-span-3 row-span-full bg-[#0D0D0D] sm:col-span-3 sm:row-start-2 sm:row-end-3 sm:h-[270px]">
          <div className="relative h-full text-center">
            <div className="w-full absolute-center sm:-mt-7">
              <h2 className="text-[28px] font-500 tracking-[-1px] text-white sm:text-lg sm:leading-tight">
                ”Crafting Dreams, Empowering Hands “
              </h2>
              <p className="mt-12 text-sm font-500 text-[#989898] sm:mt-1.5 sm:text-xs sm:leading-[1.125]">
                Elevate Your Lifestyle with <br />
                Handcrafted Excellence and <br />
                Artisanal Passion.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
              <Button
                className="group w-full"
                variant="primary"
                size="default-icon"
                rounded="full"
                asChild={true}
              >
                <a href="mailto:info@rivdesign.se">
                  Contact us
                  <Button.Icon>
                    <SvgArrowLink className="animate__animated group-hover:animate__headShake" />
                  </Button.Icon>
                </a>
              </Button>
            </div>
          </div>
        </Banner>

        <Banner
          className="col-span-5 row-span-full flex justify-end bg-cover bg-center sm:col-span-5 sm:row-start-1 sm:row-end-2 sm:h-[400px] sm:justify-start"
          style={{ backgroundImage: `url(${whiteDeerBannerSrc})` }}
        >
          <div className="flex gap-2 sm:h-full sm:max-w-[70%] sm:flex-wrap sm:content-end sm:items-end sm:justify-start">
            {['Candle', 'Décor', 'Handicrafts'].map((bi) => (
              <div key={bi} className="sm:first:w-full">
                <BlurItem>{bi}</BlurItem>
              </div>
            ))}
          </div>
        </Banner>

        <Banner
          className="col-span-4 row-span-1 flex h-full justify-end bg-cover bg-center sm:col-span-2 sm:row-start-2 sm:row-end-3 sm:h-[270px]"
          style={{ backgroundImage: `url(${bannerModelA1})` }}
        />

        <Banner className="relative col-span-4 row-span-1 h-full bg-[#0D0D0D] sm:col-span-5 sm:row-start-3 sm:row-end-4 sm:h-[150px]">
          <div className="h-40 w-40 rounded-full bg-[#1A1A1A] absolute-center" />
          <div className="absolute bottom-10 left-11 sm:bottom-8 sm:left-auto sm:right-8">
            <Button
              className="group"
              variant="primary"
              size="default-icon"
              rounded="full"
              asChild={true}
            >
              <a href="mailto:info@rivdesign.se">
                Contact us
                <Button.Icon>
                  <SvgArrowLink className="animate__animated group-hover:animate__headShake" />
                </Button.Icon>
              </a>
            </Button>
          </div>
        </Banner>
      </div>
    </Container>
  );
};

export default Banners;
