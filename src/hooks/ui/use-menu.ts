import { useLenis } from '@studio-freight/react-lenis/types';
import { useContext } from 'react';
import { MenuContext } from '~/context';

export function useMenu() {
  const ctx = useContext(MenuContext);

  if (!ctx) throw new Error('please wrap component in MenuContextProvider.');

  const open = () => {
    ctx.setState('opened');
  };
  const close = () => {
    ctx.setState('closed');
  };

  return {
    state: ctx.state,
    open,
    close,
  };
}
