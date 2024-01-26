import Button from '../button';
import Container from '../container';
import Icon from '../icon';
import SvgLogo from '~/assets/logo.svg';
import SvgLogoClean from '~/assets/logo-clean.svg';
import MenuButton from '../menu/menu-button';

export type NavigationProps = {};

const Navigation = ({}: NavigationProps) => {
  return (
    <Container>
      <div className="mt-8 flex items-center justify-between rounded-2xl border border-[#191919] p-4">
        <Icon>
          <SvgLogo className="h-9 sm:hidden" />
          <SvgLogoClean className="hidden fill-white sm:block [&_path]:fill-white " />
        </Icon>

        <div className="flex gap-2">
          <Button className="sm:hidden" variant="primary">
            Contact us
          </Button>
          <MenuButton />
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
