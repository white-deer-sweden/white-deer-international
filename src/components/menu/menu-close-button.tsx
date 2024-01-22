'use client';

import { useState } from 'react';
import SvgTimes from '~/assets/svg/times.svg';
import Icon from '~/components/layouts/icon';
import { useMenu } from '~/hooks/ui';
import Circle from '../../circle';

export type MenuCloseButtonProps = {};

export default function MenuCloseButton({}: MenuCloseButtonProps) {
  const menu = useMenu();
  const [progress, setProgress] = useState<number>(0);

  return (
    <button
      onClick={() => menu.close()}
      className="relative cursor-pointer group ml-auto"
      onMouseOver={() => setProgress(100)}
      onMouseLeave={() => setProgress(0)}
    >
      <Circle width={30} stroke="black" strokeWidth={1.5} progress={progress} />
      <Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-[0.70]">
        <SvgTimes />
      </Icon>
    </button>
  );
}
