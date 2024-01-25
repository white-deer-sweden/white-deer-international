import Container from '~/components/container';
import Icon from '~/components/icon';
import SvgThunder from '~/assets/thunder-fill.svg';

export type HeroProps = React.ComponentProps<typeof Container>;

const Hero = (props: HeroProps) => {
  return (
    <Container {...props} className="mt-[88px]">
      <div className="mx-auto flex max-w-[720px] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[54px] font-400 leading-tight -tracking-[2px] text-white sm:text-[28px]">
          ”Harmony{' '}
          <span>
            <Icon className="-mb-2 inline-block sm:h-7 sm:w-7">
              <SvgThunder className="rotate--glow h-14 w-14 origin-top-left sm:scale-50" />
            </Icon>
          </span>
          with Nature: Embrace Organic Elegance in Home and Décor“
        </h1>

        <p className="mt-9 font-500 text-[#989898] sm:mt-7 sm:text-sm">
          Enrich Your Space: Where Nature&apos;s Poetry Meets Artisan
          Craftsmanship, <br className="sm:hidden" />
          Elevating Your Home with Organic Beauty and Handcrafted Excellence.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
