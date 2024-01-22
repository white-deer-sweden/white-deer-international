'use client';

import MenuContextProvider from '~/context/menu';

export type ProvidersProps = React.PropsWithChildren;

const Providers = ({ children }: ProvidersProps) => {
  return <MenuContextProvider>{children}</MenuContextProvider>;
};

export default Providers;
