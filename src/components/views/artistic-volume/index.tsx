'use client';

import Container from '~/components/container';
import ArtisticCard from './artistic-card';
import ImgB1 from '$/static/B 2.jpg';
import ImgB2 from '$/static/B 1.jpg';
import { cn, withId } from '~/utils';
import { LegacyRef, useMemo, useState } from 'react';
import { useRef } from 'react';

export type ArtisticVolumeProps = {};

const artisticVolumes = withId([
  {
    images: [],
    title: 'Crafted Volume, Artful Beauty',
    component: (
      <ArtisticCard
        images={[ImgB1, ImgB2]}
        content={
          'These titles elegantly capture the essence of beauty and art in large dimensions, but the ultimate choice depends on your specific emphasis for each feature.'
        }
      />
    ),
  },
  {
    images: [],
    title: 'Bold Dimensions, Timeless Charm',
    component: (
      <ArtisticCard
        images={[ImgB1, ImgB2]}
        content={
          'These titles elegantly capture the essence of beauty and art in large dimensions, but the ultimate choice depends on your specific emphasis for each feature.'
        }
      />
    ),
  },
  {
    images: [],
    title: 'Versatile Elegance in Every Piece',
    component: (
      <ArtisticCard
        images={[ImgB1, ImgB2]}
        content={
          'These titles elegantly capture the essence of beauty and art in large dimensions, but the ultimate choice depends on your specific emphasis for each feature.'
        }
      />
    ),
  },
  {
    images: [],
    title: 'Unique Artistry in Size',
    component: (
      <ArtisticCard
        images={[ImgB1, ImgB2]}
        content={
          'These titles elegantly capture the essence of beauty and art in large dimensions, but the ultimate choice depends on your specific emphasis for each feature.'
        }
      />
    ),
  },
]);

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const ArtisticVolume = ({}: ArtisticVolumeProps) => {
  const nodeRef = useRef<any | null>(null);

  const [volume, setVolume] = useState<string>(artisticVolumes[0].id);

  const selectedVolume = useMemo(
    () => artisticVolumes.find((av) => av.id === volume),
    [volume],
  );

  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-5">{selectedVolume?.component}</div>
        <div className="col-span-7">
          <h1 className="mt-3 text-[40px] font-500 leading-tight -tracking-[2px] text-white">
            Artistry in Volume: Sculptures, <br />
            Pottery, and Grandeur <br />
            Creations
          </h1>
          <p className="mt-3 text-sm font-500 leading-snug text-[#989898]">
            Unleash the Beauty of Bigger Dimensions: From Sculptural Wonders to
            <br />
            Artisanal Pottery, Elevate Your Space with Grandeur Craftsmanship
            and
            <br /> Captivating Designs.
          </p>

          <div className="mt-[30px]">
            <ul className="space-y-4 text-white">
              {artisticVolumes.map((av) => (
                <li
                  key={av.id}
                  onClick={() => setVolume(av.id)}
                  className={cn(
                    'text-xl flex h-[72px] cursor-pointer items-center gap-2 rounded-3xl bg-[#0D0D0D] px-8 py-6 font-500 text-[#5C5C5C] transition duration-500',
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
