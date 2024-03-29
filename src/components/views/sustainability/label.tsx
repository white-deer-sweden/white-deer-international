export type LabelProps = React.PropsWithChildren<{}>;

const Label = async ({ children }: LabelProps) => {
  return (
    <span className="flex h-9 items-center justify-center rounded-full border border-[#191919] px-8 py-2 text-sm font-600 text-white lg:px-6 lg:text-xs">
      {children}
    </span>
  );
};

export default Label;
