import Container from '../container';
import Icon from '../icon';
import SvgLogoVertical from '~/assets/logo-vertical.svg';

export type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <Container className="mb-12 mt-16">
      <div className="flex items-center justify-between rounded-2xl border border-[#191919] px-6 py-2.5">
        <p className="my-1.5 text-base font-500 text-white">
          All right reserved to White Deer
        </p>

        <Icon>
          <SvgLogoVertical className="h-12" />
        </Icon>
      </div>
    </Container>
  );
};

export default Footer;
