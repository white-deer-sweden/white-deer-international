import SvgMenu from '~/assets/svg/menu.svg';
import Icon from '~/components/layouts/icon';
import { useMenu } from '~/hooks/ui';

export type MenuButtonProps = {};

export default function MenuButton({}: MenuButtonProps) {
  const menu = useMenu();

  return (
    <button onClick={() => menu.open()}>
      <Icon className="text-foreground">
        <SvgMenu />
      </Icon>
    </button>
  );
}
