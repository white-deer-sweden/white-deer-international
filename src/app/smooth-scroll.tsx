'use client';

import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useEffect, useMemo } from 'react';
import { useMenu } from '~/hooks/ui/use-menu';
import { isIos, isMobile } from '~/utils';

export type SmoothScrollProps = React.PropsWithChildren;

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenis: any = useLenis();
  const { state } = useMenu();

  useEffect(() => {
    if (lenis) lenis.isLocked = state === 'opened';
  }, [lenis, state]);

  const isMobileDevise = useMemo(() => isMobile() || isIos(), []);

  if (isMobileDevise) return children;

  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
