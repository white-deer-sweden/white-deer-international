'use client';

import SvgMenu from '~/assets/menu.svg';
import { useMenu } from '~/hooks/ui';
import Icon from '../icon';
import Button from '../button';

export type MenuButtonProps = {};

export default function MenuButton({}: MenuButtonProps) {
  const menu = useMenu();

  return (
    <Button variant="primary" size="icon" onClick={() => menu.open()}>
      <Icon>
        <SvgMenu className="h-6 w-6" />
      </Icon>
    </Button>
  );
}
