import Button from '../button';
import Container from '../container';
import Icon from '../icon';
import SvgLogo from '~/assets/logo.svg';
import SvgMenu from '~/assets/menu.svg';

export type NavigationProps = {};

const Navigation = ({}: NavigationProps) => {
  return (
    <Container>
      <div className="mt-8 flex items-center justify-between rounded-2xl border border-[#191919] p-4">
        <Icon>
          <SvgLogo className="h-9" />
        </Icon>

        <div className="flex gap-2">
          <Button variant="primary">Contact us</Button>
          <Button variant="primary" size="icon">
            <Icon>
              <SvgMenu className="h-6 w-6" />
            </Icon>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
