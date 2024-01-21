import SvgThunder from '~/assets/thunder.svg';
import Icon from '~/components/icon';

export type FeatureProps = {
  title: string;
  description: string;
};

const Feature = ({ title, description }: FeatureProps) => {
  return (
    <article className="flex items-center gap-2 rounded-3xl bg-[#0D0D0D] p-3">
      <div className="flex max-h-20 min-h-20 min-w-20 max-w-20 items-center justify-center rounded-2xl bg-[#161616]">
        <Icon>
          <SvgThunder />
        </Icon>
      </div>

      <div>
        <h1 className="text-base font-500 text-white">{title}</h1>
        <p className="mt-2 line-clamp-2 text-sm text-[#989898]">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Feature;
