export type LabeledTitleProps = {
  label: string;
  title: string;
};

const LabeledTitle = ({ label, title }: LabeledTitleProps) => {
  return (
    <div className="flex justify-center gap-2 sm:items-center">
      <h1 className="text-[#989898] sm:text-xs">{title}</h1>
      <span className="flex h-[26px] items-center justify-center rounded-full border border-[#191919] px-4 py-2 text-[10px] text-white">
        {label}
      </span>
    </div>
  );
};

export default LabeledTitle;
