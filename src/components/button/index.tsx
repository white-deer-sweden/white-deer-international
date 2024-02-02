import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '~/utils';
import Icon from '../icon';
import { Slot } from '../slot';
import React from 'react';

const buttonVariants = cva(
  'text-white inline-flex justify-center items-center gap-2 font-600 relative',
  {
    variants: {
      variant: {
        primary: 'bg-white/5 backdrop-blur-lg',
        outline: 'border border-[#191919]',
      },
      size: {
        default: 'py-4 px-6 h-[42px] text-sm sm:text-xs',
        'default-icon': 'py-4 pl-6 pr-14 h-[42px] text-sm',
        icon: 'w-[42px] h-[42px]',
        lg: 'h-[60px] py-4 px-6 text-base',
      },
      rounded: {
        default: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      rounded: 'default',
    },
  },
);

export type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ComponentProps<'button'> & {
    asChild?: boolean;
  };

const Button = Object.assign(
  React.forwardRef<HTMLButtonElement, ButtonProps>(function ButtonComp(
    {
      children,
      className,
      variant,
      rounded,
      size,
      asChild,
      ...props
    }: ButtonProps,
    ref,
  ) {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant, rounded }))}
        // @ts-expect-error
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }),
  {
    Icon: ({ children }: React.PropsWithChildren) => (
      <div className="absolute bottom-1.5 right-1.5 top-1.5 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
        <Icon>{children}</Icon>
      </div>
    ),
  },
);

export default Button;
