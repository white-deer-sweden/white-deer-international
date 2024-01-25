import { cn } from '~/utils';

export type BannerProps = React.PropsWithChildren<
  React.ComponentProps<'section'>
>;

const Banner = ({ children, className, ...props }: BannerProps) => {
  return (
    <article
      className={cn('overflow-hidden rounded-4xl px-6 py-4 sm:p-4', className)}
      {...props}
    >
      {children}
    </article>
  );
};

export default Banner;
