'use client';

import Container from '~/components/container';
import ArtisticCard from './artistic-card';
import ImgB2 from '$/static/B 1.jpg';
import ImgB1 from '$/static/B 2.jpg';
import ImgB3 from '$/static/B 3.jpg';
import ImgB4 from '$/static/B 4.jpg';
import ImgB5 from '$/static/B 5.jpg';
import { cn, withId } from '~/utils';
import { useMemo, useState } from 'react';

export type ArtisticVolumeProps = {};

const artisticVolumes = withId([
  {
    title: 'Crafted Volume, Artful Beauty',
    images: [ImgB2, ImgB1],
    content:
      'These titles elegantly capture the essence of beauty and art in large dimensions, but the ultimate choice depends on your specific emphasis for each feature.',
  },
  {
    title: 'Bold Dimensions, Timeless Charm',
    images: [ImgB3, ImgB1],
    content:
      'Bold Dimensions, Timeless Charm: A striking interplay of daring proportions and enduring elegance, encapsulating a captivating allure that transcends the bounds of time.',
  },
  {
    title: 'Versatile Elegance in Every Piece',
    images: [ImgB4, ImgB1],
    content:
      'Versatile Elegance in Every Piece: Each creation seamlessly merges flexibility and refinement, ensuring a timeless allure that graces every piece with a touch of sophistication.',
  },
  {
    title: 'Unique Artistry in Size',
    images: [ImgB5, ImgB1],
    content:
      'Unique Artistry in Size: Elevating the ordinary, each piece unveils distinctive craftsmanship, transforming size into a canvas for unparalleled artistic expression.',
  },
]);

const ArtisticVolume = ({}: ArtisticVolumeProps) => {
  const [volume, setVolume] = useState<string>(artisticVolumes[0].id);

  const selectedVolume = useMemo(
    () => artisticVolumes.find((av) => av.id === volume),
    [volume],
  );

  return (
    <Container className="mt-32">
      <div className="grid grid-cols-12 gap-[74px] lg:gap-12 sm:grid-cols-1 sm:gap-6">
        <div className="col-span-5 sm:col-span-full">
          <ArtisticCard
            className="h-full"
            images={selectedVolume?.images || []}
            content={selectedVolume?.content}
          />
        </div>
        <div className="tablet:pb-0 col-span-7 py-14 sm:col-span-full sm:row-start-1 sm:py-0">
          <h1 className="mt-3 text-[40px] font-500 leading-tight -tracking-[2px] text-white lg:text-4xl sm:text-2xl sm:leading-snug">
            Artistry in Volume: Sculptures, <br />
            Pottery, and Grandeur <br />
            Creations
          </h1>
          <p className="mt-3 text-sm font-500 leading-snug text-[#989898] sm:text-sm">
            Unleash the Beauty of Bigger Dimensions: From Sculptural Wonders to
            <br className="sm:hidden" />
            Artisanal Pottery, Elevate Your Space with Grandeur Craftsmanship
            and
            <br className="sm:hidden" /> Captivating Designs.
          </p>

          <div className="mt-[30px]">
            <ul className="space-y-4 text-white">
              {artisticVolumes.map((av) => (
                <li
                  key={av.id}
                  onClick={() => setVolume(av.id)}
                  className={cn(
                    'tablet:px-6 tablet:py-4 tablet:rounded-2xl flex h-[72px] cursor-pointer items-center gap-2 rounded-3xl bg-[#0D0D0D] px-8 py-6 text-xl font-500 text-[#5C5C5C] transition duration-500 sm:text-sm',
                    {
                      'bg-white': av.id === volume,
                    },
                  )}
                >
                  <span
                    className={cn(
                      'inline-block h-3 w-3 rounded-full bg-[#2F2F2F] transition duration-500',
                      {
                        'bg-[#D9D9D9]': av.id === volume,
                      },
                    )}
                  />
                  {av.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ArtisticVolume;
