'use client';

import ImgCrafting1 from '$/static/crafts/crafting-01.jpg';
import ImgCrafting2 from '$/static/crafts/crafting-02.jpg';
import ImgCrafting3 from '$/static/crafts/crafting-03.jpg';
import ImgCrafting4 from '$/static/crafts/crafting-04.jpg';
import ImgCrafting5 from '$/static/crafts/crafting-05.jpg';
import ImgCrafting6 from '$/static/crafts/crafting-06.jpg';
import ImgCrafting7 from '$/static/crafts/crafting-07.jpg';
import ImgCrafting8 from '$/static/crafts/crafting-08.jpg';
import ImgCrafting9 from '$/static/crafts/crafting-09.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { useRef } from 'react';
import Button from '~/components/button';
import Container from '~/components/container';
import LabeledTitle from '~/components/labeled-title';
import { isMobile, withId } from '~/utils';
import Craft from './craft';
import Icon from '~/components/icon';
import SvgArrowLeft from '~/assets/arrow-left.svg';
import SvgArrowRight from '~/assets/arrow-right.svg';
import { log } from 'util';

const crafts = withId([
  {
    image: ImgCrafting1,
    title: 'Gleaming Brass Holders',
    description:
      'a testament to elegance and functionality. Crafted with care, these artisanal candle...',
  },
  {
    image: ImgCrafting2,
    title: 'Jewelry Box',
    description:
      'Discover the perfect fusion of style and practicality, as we delve into the enchanting world of the jewelry...',
  },
  {
    image: ImgCrafting3,
    title: 'Scented Votive Candles',
    description:
      'Art of ambiance creation and discover the perfect aromatic companion for every moment...',
  },
  {
    image: ImgCrafting4,
    title: 'Statues of Famous Figures',
    description:
      'Step into a world where each chiseled masterpiece tells a story that transcends time...',
  },
  {
    image: ImgCrafting5,
    title: 'Wooden Wick Candles',
    description:
      'Ignite a new chapter of tranquility as you explore the captivating allure of Wooden Wick Candles...',
  },
  {
    image: ImgCrafting6,
    title: 'Ceramic and Resin Vessels',
    description:
      'Step into the world of timeless elegance and artisanal craftsmanship with our Ceramic...',
  },
  {
    image: ImgCrafting7,
    title: 'Plant Pots',
    description:
      'Immerse yourself in the art of cultivation, as we present a curated selection that elevates your...',
  },
  {
    image: ImgCrafting8,
    title: 'Taper Candles',
    description:
      'Illuminate your surroundings with a touch of grace, and let the dance of flames on these elegant candles...',
  },
  {
    image: ImgCrafting9,
    title: 'ECO Bag',
    description:
      'Let your style reflect your commitment to sustainability, and carry a piece of the Earth with you...',
  },
]);

export type CraftsProps = {};

const Crafts = ({}: CraftsProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  const snapPoints = useRef<number[]>([]);

  const maxXPoint = useRef<number>(0);
  const minXPoint = useRef<number>(0);

  const isNavigating = useRef<boolean>(false);

  const { contextSafe } = useGSAP(
    () => {
      gsap.registerPlugin(Draggable);

      const dragElem = container.current;

      if (!dragElem) return;

      const allElems: HTMLDivElement[] = gsap.utils.toArray('.craft--item');
      const startElem = allElems[1];
      const proxy = '.proxy';
      const slidesPerView = 3;

      allElems.forEach((elm) => {
        if (elm) {
          elm.style.minWidth =
            ((dragElem.offsetWidth > window.innerWidth
              ? window.innerWidth
              : dragElem.offsetWidth) -
              (slidesPerView - 1) *
                parseFloat(getComputedStyle(startElem).marginRight)) /
              3 +
            'px';
        }
      });
      gsap.set(proxy, { width: dragElem.scrollWidth });

      const desktopDragSpeed = 0.4;
      const mobileDragSpeed = 0.2;

      const overViewSlidesCount = allElems.length - slidesPerView;

      const sp = allElems.map((elm) => -elm.offsetLeft);
      const snap = gsap.utils.snap(sp);
      snapPoints.current = sp;

      const minX =
        window.innerWidth < 640
          ? -[...allElems].reduce((acc, prev) => acc + prev.offsetWidth, 0) +
            startElem.offsetWidth +
            window.innerWidth * 0.1 -
            (allElems.length - 1) *
              parseFloat(getComputedStyle(startElem).marginRight)
          : -startElem.offsetWidth * overViewSlidesCount -
            overViewSlidesCount *
              parseFloat(getComputedStyle(startElem).marginRight) -
            parseFloat(getComputedStyle(startElem).marginRight);

      const maxX = window.innerWidth < 640 ? window.innerWidth * 0.1 : 0;
      /** else condition for more control
       *  (dragElem.offsetWidth - startElem.offsetWidth * slidesPerView) / 2 -
            parseFloat(getComputedStyle(startElem).marginRight)
       */

      minXPoint.current = minX;
      maxXPoint.current = maxX;

      Draggable.create(dragElem, {
        type: 'x',
        cursor: overViewSlidesCount > 0 ? 'grab' : 'auto',
        zIndexBoost: false,
        onDragStart: () => {
          isNavigating.current = true;
        },
        onDragEnd: () => {
          isNavigating.current = false;
          const value = parseFloat(gsap.getProperty(dragElem, 'x') + '');
          const snappedValue = snap(value);

          gsap.to(dragElem, { x: snappedValue });
        },
        bounds: { minX, maxX },
        throwProps: true,
        dragResistance: isMobile() ? mobileDragSpeed : desktopDragSpeed, // Add resistance for smoother dragging
      });

      const startPos =
        startElem.offsetLeft +
        (startElem.offsetWidth -
          (window.innerWidth < 640
            ? window.innerWidth
            : dragElem.offsetWidth)) /
          2;

      gsap.set(dragElem, { x: -startPos });
    },
    { scope: container },
  );

  const onNextClick = contextSafe(() => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    const snap = gsap.utils.snap(snapPoints.current);
    const allElems: HTMLDivElement[] = gsap.utils.toArray('.craft--item');
    const startElem = allElems[1];
    gsap.to(container.current, {
      x: Math.max(
        snap(parseFloat(gsap.getProperty(container.current, 'x') + '')) -
          (startElem.offsetWidth +
            parseFloat(getComputedStyle(startElem).marginRight)),
        minXPoint.current + 10,
      ),
      onComplete: () => {
        isNavigating.current = false;
      },
    });
  });

  const onPrevClick = contextSafe(() => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    const snap = gsap.utils.snap(snapPoints.current);
    const allElems: HTMLDivElement[] = gsap.utils.toArray('.craft--item');
    const startElem = allElems[1];
    gsap.to(container.current, {
      x: Math.min(
        Math.max(
          snap(parseFloat(gsap.getProperty(container.current, 'x') + '')) +
            (startElem.offsetWidth +
              parseFloat(getComputedStyle(startElem).marginRight)),
          0,
        ),
        maxXPoint.current,
      ),
      onComplete: () => {
        isNavigating.current = false;
      },
    });
  });

  return (
    <Container className="mt-36">
      <LabeledTitle title="Crafting Lifestyle Brilliance" label="Organic" />

      <h1 className="mt-3 text-center text-[38px] font-400 leading-tight -tracking-[2px] text-white">
        Organic Illuminations: Crafting <br />
        Creativity
      </h1>

      <div className="container mt-14 max-w-5xl overflow-hidden">
        <div
          ref={container}
          className="draggable container relative will-change-transform"
        >
          <div className="proxy absolute left-0 top-0 h-full w-full"></div>
          <div className="crafts">
            {crafts.map((craft) => {
              return (
                <div key={craft.id} className="craft--item">
                  <Craft
                    alt={`White Deer | ${craft.title}`}
                    description={craft.description}
                    img={craft.image}
                    title={craft.title}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          <Button
            className="w-[88px]"
            variant="outline"
            rounded="full"
            onClick={() => onPrevClick()}
          >
            <Icon>
              <SvgArrowLeft />
            </Icon>
          </Button>
          <Button
            className="w-[88px]"
            variant="outline"
            rounded="full"
            onClick={() => onNextClick()}
          >
            <Icon>
              <SvgArrowRight />
            </Icon>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Crafts;
