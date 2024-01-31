'use client';

import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react';
import { useMenu } from '~/hooks/ui';
export type SmoothScrollProps = React.PropsWithChildren;

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenis: any = useLenis();
  const { state } = useMenu();

  useEffect(() => {
    if (lenis) lenis.isLocked = state === 'opened';
  }, [lenis, state]);

  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
