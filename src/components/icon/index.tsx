import { cn } from '~/utils';

export type IconProps = React.PropsWithChildren<React.ComponentProps<'span'>>;

const Icon = ({ children, className, ...props }: IconProps) => {
  return (
    <span
      {...props}
      className={cn(
        'inline-flex [&_svg]:m-auto [&_svg]:fill-current [&_svg]:text-current',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Icon;
