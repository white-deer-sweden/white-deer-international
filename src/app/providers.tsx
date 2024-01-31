'use client';

import MenuContextProvider from '~/context/menu';
import SmoothScroll from './smooth-scroll';

export type ProvidersProps = React.PropsWithChildren;

const Providers = ({ children }: ProvidersProps) => {
  return (
    <MenuContextProvider>
      <SmoothScroll>{children}</SmoothScroll>
    </MenuContextProvider>
  );
};

export default Providers;
