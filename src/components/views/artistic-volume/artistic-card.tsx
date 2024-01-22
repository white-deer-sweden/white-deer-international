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
        'flex flex-col rounded-4xl border border-[#191919] px-10 pb-6 pt-16',
        className,
      )}
    >
      <div className="flex justify-center">
        <SvgArtisticLogo />
      </div>

      <div className="mt-auto">
        <div className="grid max-w-full grid-cols-2 gap-4">
          {images.map((img) => (
            <Image
              key={img.src}
              src={img}
              alt=""
              placeholder="blur"
              height={142}
              width={250}
              className="h-[142px] rounded-2xl object-cover object-center"
            />
          ))}
        </div>

        <p className="mt-16 text-base font-500 text-[#989898]">{content}</p>
      </div>
    </article>
  );
};

export default ArtisticCard;
