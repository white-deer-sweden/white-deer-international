import Image, { StaticImageData } from 'next/image';
import SvgArtisticLogo from '~/assets/artistic-logo.svg';
import { cn } from '~/utils';

export type ArtisticCardProps = {
  images: StaticImageData[];
  content: React.ReactNode;
  className?: string;
};

const ArtisticCard = ({ images, content, className }: ArtisticCardProps) => {
  return (
    <article
      className={cn(
        'flex flex-col rounded-4xl border border-[#191919] px-10 pb-6 pt-6 sm:px-6 sm:pt-6',
        className,
      )}
    >
      <div className="mt-12 lg:mt-3 sm:mt-0">
        <div className="grid max-w-full grid-cols-2 gap-4 lg:grid-cols-1 sm:grid-cols-2">
          {images.map((img) => (
            <Image
              key={img.src}
              src={img}
              alt=""
              placeholder="blur"
              height={142}
              width={250}
              className="h-[142px] w-full rounded-2xl object-cover object-center first:col-span-full first:h-[242px] lg:first:hidden sm:h-[90px] sm:rounded-lg"
            />
          ))}
        </div>

        <p className="mt-16 text-base font-500 text-[#989898] lg:mt-4 sm:mt-4 sm:text-xs">
          {content}
        </p>
      </div>
    </article>
  );
};

export default ArtisticCard;
