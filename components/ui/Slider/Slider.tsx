'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

import { desktop, mobile, tablet } from '@/data';
import { SliderProps } from './types';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export const Slider: React.FC<SliderProps> = ({
  id,
  data = [],
  element: Element,
  isInteractive = false,
  isFadeEffect = false,
  isLoop = false,
  isAutoplay = false,
  isPagination = false,
  isNavigation = false,
  navigationBreakpoints = {
    isMobile: true,
    isTablet: true,
    isDesktop: true,
  },
}) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  useEffect(() => {
    if (isFirstRender) setIsFirstRender(false);
  }, [isFirstRender]);

  const breakpoints = {
    [mobile]: {
      navigation: {
        enabled: navigationBreakpoints.isMobile,
        disabledClass: 'visually-hidden',
      },
    },
    [tablet]: {
      navigation: {
        enabled: navigationBreakpoints.isTablet,
        disabledClass: 'visually-hidden',
      },
    },
    [desktop]: {
      navigation: {
        enabled: navigationBreakpoints.isDesktop,
        disabledClass: 'visually-hidden',
      },
    },
  };

  return isFirstRender ? null : (
    <Swiper
      id={id}
      modules={[Autoplay, Pagination, EffectFade, Navigation]}
      allowTouchMove={isInteractive}
      grabCursor={isInteractive}
      effect={isFadeEffect ? 'fade' : ''}
      autoplay={isAutoplay ? { disableOnInteraction: false } : false}
      loop={isLoop}
      navigation={isNavigation}
      breakpoints={breakpoints}
      pagination={{
        enabled: isPagination,
        clickable: true,
        type: 'bullets',
      }}
    >
      {data.map((props, index) => (
        <SwiperSlide key={index}>
          <Element {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
