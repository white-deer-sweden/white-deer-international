import { cn } from '~/utils';

export type ContainerProps = React.PropsWithChildren<
  React.ComponentProps<'section'>
>;
const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <section className={cn('container', className)} {...props}>
      {children}
    </section>
  );
};

export default Container;
