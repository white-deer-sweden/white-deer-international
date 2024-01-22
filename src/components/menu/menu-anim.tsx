'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { useMenu } from '~/hooks/ui';
import Menu from './menu';

export type MenuAnimProps = {};

export default function MenuAnim({}: MenuAnimProps) {
  const menu = useMenu();

  const menuContainer = useRef<any>(null);

  const { contextSafe } = useGSAP(() => {}, { scope: menuContainer });

  const animOpenMenu = contextSafe((onComplete: () => void) => {
    const tl = gsap.timeline();
    tl.set('.g--menu__container', { opacity: 1 })
      .fromTo(
        '.g--menu__sidebar',
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
      )
      .fromTo(
        '.g--menu__items',
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
      )
      .add(onComplete);
  });

  const animCloseMenu = contextSafe((onComplete: () => void) => {
    const tl = gsap.timeline();
    tl.to('.g--menu__sidebar', {
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    })
      .to('.g--menu__items', {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      })
      .to('.g--menu__container', {
        opacity: 0,
      })
      .add(onComplete);
  });

  return (
    <Transition
      nodeRef={menuContainer}
      timeout={5000}
      mountOnEnter
      unmountOnExit
      in={menu.state === 'opened'}
      addEndListener={(done: any) => {
        if (menu.state === 'opened') animOpenMenu(done);
        else animCloseMenu(done);
      }}
    >
      <Menu ref={menuContainer} />
    </Transition>
  );
}
