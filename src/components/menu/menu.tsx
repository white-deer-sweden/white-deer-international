import Link from 'next/link';
import { forwardRef } from 'react';
import SvgLogo from '~/assets/logo.svg';
import MenuCloseButton from './menu-close-button';
import Icon from '../icon';
import { withId } from '~/utils';

const menuItems = withId([{}]);

export type MenuProps = {};

export default forwardRef(function ({}: MenuProps, ref: any) {
  return (
    <div ref={ref} className="z-first fixed left-0 top-0 h-screen w-screen">
      <div className="g--menu__container flex h-full w-full bg-black">
        <div className="g--menu__sidebar flex w-[30vw] flex-col justify-between pb-10 pl-12 pr-8 pt-8">
          <Icon>
            <SvgLogo className="h-9" />
          </Icon>
        </div>
        <div className="g--menu__items h-full grow bg-white px-14 py-10">
          <div className="flex h-full w-[70vw] flex-col justify-center">
            <div className="absolute right-8 top-8">
              <MenuCloseButton />
            </div>

            <ul className="font-pop space-y-6 text-7xl font-700 leading-none">
              {statics.navigation.map((nav) => (
                <li key={nav.slug}>
                  <Link href={nav.slug}>
                    <FillText tag="span">{nav.text}</FillText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
