import { cn } from '~/utils';

export type BannerProps = React.PropsWithChildren<
  React.ComponentProps<'section'>
>;

const Banner = ({ children, className, ...props }: BannerProps) => {
  return (
    <article
      className={cn('rounded-4xl overflow-hidden px-6 py-4', className)}
      {...props}
    >
      {children}
    </article>
  );
};

export default Banner;
