import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '~/utils';
import Icon from '../icon';

const buttonVariants = cva(
  'text-white flex justify-center items-center gap-2 font-600',
  {
    variants: {
      variant: {
        primary: 'bg-white/5 backdrop-blur-lg',
        outline: 'border border-[#191919]',
      },
      size: {
        default: 'py-4 px-6 h-[42px] text-sm',
        'default-icon': 'py-4 pl-6 pr-14 h-[42px] text-sm',
        icon: 'w-[42px] h-[42px]',
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
    icon?: React.ReactNode;
  };

const Button = ({
  children,
  className,
  variant,
  rounded,
  size,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ className, size, variant, rounded }), {
        relative: icon,
      })}
      {...props}
    >
      {children}

      {icon && (
        <div className="absolute bottom-1.5 right-1.5 top-1.5 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
          <Icon>{icon}</Icon>
        </div>
      )}
    </button>
  );
};

export default Button;
