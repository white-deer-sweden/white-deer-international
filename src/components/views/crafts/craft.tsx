import Image, { StaticImageData } from 'next/image';

export type CraftProps = {
  img: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

const Craft = ({ img, alt, title, description }: CraftProps) => {
  return (
    <article className="w-full rounded-4xl bg-[#0D0D0D] p-4">
      <Image
        src={img}
        alt={alt}
        placeholder="blur"
        width={300}
        height={220}
        className="h-[210px] w-full rounded-3xl object-cover object-center"
      />

      <div className="mt-2 px-2 py-4 sm:mt-4">
        <h6 className="text-2xl font-500 leading-tight -tracking-[2px] text-white sm:text-base">
          {title}
        </h6>

        <p className="mt-4 max-w-[240px] text-sm font-500 text-[#989898] sm:mt-2 sm:text-xs">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Craft;
