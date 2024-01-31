import Link from 'next/link';
import { forwardRef } from 'react';
import SvgLogo from '~/assets/logo.svg';
import MenuCloseButton from './menu-close-button';
import Icon from '../icon';
import { withId } from '~/utils';
import SvgArrowBroken from '~/assets/arrow-broken.svg';
import SvgFacebook from '~/assets/facebook.svg';
import SvgX from '~/assets/x.svg';
import SvgInstagram from '~/assets/instagram.svg';
import SvgLogoClean from '~/assets/logo-clean.svg';
import ImgRivDesignLogo from '$/static/riv-design-logo.png';
import Image from 'next/image';

const menuItems = withId([
  { text: 'Home', slug: '/' },
  { text: 'Recycling Essence', slug: '/' },
  { text: 'Brand', slug: '/' },
  { text: 'Products', slug: '/' },
  { text: 'Join newsletter', slug: '/' },
]);

const socials = withId([
  { title: 'Facebook', icon: <SvgFacebook />, href: 'https://google.com' },
  { title: 'X', icon: <SvgX />, href: 'https://google.com' },
  { title: 'Instagram', icon: <SvgInstagram />, href: 'https://google.com' },
]);

export type MenuProps = {};

const contact = (
  <div>
    <h6 className="text-2xl font-500 text-[#030303] sm:text-xl sm:text-white">
      Contact our <br className="sm:hidden" />
      team via:
    </h6>
    <a
      href="https://oraniworld.com"
      className="mt-2 inline-block font-500 text-[#989898] sm:text-sm"
    >
      Info@rivdesign.se
    </a>

    <div className="mt-8 flex gap-3.5 sm:mt-10 sm:gap-0">
      {socials.map((social) => (
        <a
          href={social.href}
          key={social.id}
          className="flex h-[48px] w-[48px] origin-left scale-90 items-center justify-center rounded-full border border-[#DDDDDD] transition hover:border-[#949494] sm:-my-2 sm:scale-75"
        >
          <Icon className="sm:[&_path]:fill-white">{social.icon}</Icon>
        </a>
      ))}
    </div>
  </div>
);

export default forwardRef(function Menu({}: MenuProps, ref: any) {
  return (
    <div ref={ref} className="fixed left-0 top-0 z-50 h-screen w-screen">
      <div className="g--menu__container flex h-full w-full bg-black sm:flex-col-reverse">
        <div className="g--menu__sidebar flex w-[30vw] flex-col items-start justify-between pb-10 pl-12 pr-8 pt-8 sm:w-full sm:px-4 sm:py-6">
          <Icon className="sm:hidden">
            <SvgLogo className="h-9" />
          </Icon>

          <div className="hidden sm:block">{contact}</div>

          <div className="sm:mt-6">
            <div className="flex items-center gap-3">
              <span className="text-lg font-500 leading-none  text-[#989898]">
                Powerd By
              </span>

              <div className="flex gap-[3px]">
                <Image
                  src={ImgRivDesignLogo}
                  alt="White Deer | Riv Design"
                  width={14}
                  height={17}
                  className="object-contain object-center"
                />

                <span className="text-base font-500 leading-none text-white">
                  RivDesign.Se
                </span>
              </div>
            </div>

            <p className="mt-6 text-base font-500 leading-tight text-[#989898] sm:text-sm">
              Elevate Your Surroundings with White Deer: Where Craftsmanship
              Meets Elegance.
            </p>
          </div>
        </div>
        <div className="g--menu__items flex h-full grow flex-col justify-between bg-white px-14 py-10 sm:justify-normal sm:px-4">
          <div className="flex items-center justify-between sm:rounded-2xl sm:border sm:border-[#E0E0E0] sm:p-4">
            <Icon className="hidden sm:block">
              <SvgLogoClean />
            </Icon>
            <span className="text-[#B9B9B9] sm:hidden">Navigation</span>
            <MenuCloseButton />
          </div>
          <div className="mb-auto mt-auto flex w-[70vw] flex-col justify-center sm:w-full">
            <ul className="font-pop space-y-6 text-7xl font-500 leading-none sm:space-y-0 sm:pl-10 sm:text-[32px] sm:font-400 sm:tracking-[-2px]">
              {menuItems.map((nav) => (
                <li key={nav.slug}>
                  <Link
                    href={nav.slug}
                    className="group inline-flex items-center text-[#AEAEAE] transition duration-500 hover:text-black"
                  >
                    {nav.text}

                    <Icon className="text-black opacity-0 transition duration-500 group-hover:opacity-100">
                      <SvgArrowBroken className="scale-75" />
                    </Icon>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-end sm:hidden">{contact}</div>
        </div>
      </div>
    </div>
  );
});
