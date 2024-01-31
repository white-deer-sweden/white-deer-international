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
import { useEffect, useRef, useState } from 'react';
import Button from '~/components/button';
import Container from '~/components/container';
import LabeledTitle from '~/components/labeled-title';
import { debounce, isMobile, withId } from '~/utils';
import Craft from './craft';
import Icon from '~/components/icon';
import SvgArrowLeft from '~/assets/arrow-left.svg';
import SvgArrowRight from '~/assets/arrow-right.svg';
import { useIsMobile } from '~/hooks/ui';

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

const DRAG_OFFSET = 16;

const Crafts = ({}: CraftsProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const isMobileDevice = useIsMobile();

  const snapPoints = useRef<number[]>([]);

  const maxXPoint = useRef<number>(0);
  const minXPoint = useRef<number>(0);

  const isNavigating = useRef<boolean>(false);
  const draggableInstance = useRef<Draggable | null>(null);

  const [swidth, setSwidth] = useState<number | null>(null);

  const resize = debounce(() => setSwidth?.(window.innerWidth), 400);

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('reszie', resize);
    };
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      gsap.registerPlugin(Draggable);

      const dragElem = container.current;

      if (!dragElem) return;
      console.log('render', swidth, draggableInstance);

      const dragIsMobile = isMobile() && window.innerWidth < 640;

      const allElems: HTMLDivElement[] = gsap.utils.toArray('.craft--item');
      const startElem = allElems[0];
      const proxy = '.proxy';
      const slidesPerView = 3;

      allElems.forEach((elm) => {
        if (elm) {
          elm.style.minWidth =
            Math.floor(
              dragIsMobile
                ? window.innerWidth * 0.75 -
                    ((slidesPerView - 1) *
                      parseFloat(getComputedStyle(startElem).marginRight)) /
                      slidesPerView
                : (dragElem.offsetWidth -
                    (slidesPerView - 1) *
                      parseFloat(getComputedStyle(startElem).marginRight)) /
                    slidesPerView,
            ) + 'px';
        }
      });
      gsap.set(proxy, { width: dragElem.scrollWidth });

      const desktopDragSpeed = 0.4;
      const mobileDragSpeed = 0.05;

      const overViewSlidesCount = allElems.length - slidesPerView;

      const minX = dragIsMobile
        ? -[...allElems].reduce((acc, prev) => acc + prev.offsetWidth, 0) +
          startElem.offsetWidth -
          (allElems.length - 1) *
            parseFloat(getComputedStyle(startElem).marginRight) +
          (window.innerWidth - startElem.offsetWidth) / 2
        : -startElem.offsetWidth * overViewSlidesCount -
          overViewSlidesCount *
            parseFloat(getComputedStyle(startElem).marginRight);

      const maxX = dragIsMobile ? 0 : 0;
      /** else condition for more control
       *  (dragElem.offsetWidth - startElem.offsetWidth * slidesPerView) / 2 -
            parseFloat(getComputedStyle(startElem).marginRight)
      */

      const sp = dragIsMobile
        ? allElems.map(
            (elm) =>
              -Math.abs(
                elm.offsetLeft - (window.innerWidth - elm.offsetWidth) / 2,
              ),
          )
        : allElems.map((elm) => -elm.offsetLeft);

      if (dragIsMobile) sp[0] = DRAG_OFFSET;

      const snap = gsap.utils.snap(sp);
      snapPoints.current = sp;

      minXPoint.current = minX;
      maxXPoint.current = maxX;

      if (draggableInstance.current) draggableInstance.current.kill();

      draggableInstance.current = Draggable.create(dragElem, {
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
        bounds: {
          minX: minX - DRAG_OFFSET,
          maxX: maxX + DRAG_OFFSET * (dragIsMobile ? 2 : 1),
        },
        throwProps: true,
        dragResistance: dragIsMobile ? mobileDragSpeed : desktopDragSpeed, // Add resistance for smoother dragging
      })[0];

      if (dragIsMobile) gsap.set(dragElem, { x: maxX + DRAG_OFFSET });
    },
    { scope: container, dependencies: [swidth] },
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
        minXPoint.current,
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
        snap(parseFloat(gsap.getProperty(container.current, 'x') + '')) +
          (startElem.offsetWidth +
            parseFloat(getComputedStyle(startElem).marginRight)),
        0,
      ),
      onComplete: () => {
        isNavigating.current = false;
      },
    });
  });

  return (
    <Container className="mt-36 sm:px-0">
      <LabeledTitle title="Crafting Lifestyle Brilliance" label="Organic" />

      <h1 className="mt-3 text-center text-[38px] font-400 leading-tight -tracking-[2px] text-white sm:text-2xl sm:leading-tight sm:tracking-[-1px]">
        Organic Illuminations: Crafting <br />
        Creativity
      </h1>

      <div className="container mt-14 max-w-5xl overflow-hidden sm:mt-6 sm:overflow-y-visible sm:px-0">
        <div
          ref={container}
          className="draggable relative will-change-transform sm:px-0"
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

        {!isMobileDevice && (
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
        )}
      </div>
    </Container>
  );
};

export default Crafts;
