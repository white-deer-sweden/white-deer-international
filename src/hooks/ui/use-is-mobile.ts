import { isMobile } from '~/utils';
import { useIsClient } from '.';

export function useIsMobile() {
  const isClient = useIsClient();

  return isClient ? isMobile() : null;
}
