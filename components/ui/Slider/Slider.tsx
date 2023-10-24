'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { desktop, mobile, tablet } from '@/data/screens';
import { SliderProps } from './types';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider: React.FC<SliderProps> = ({
  data,
  element: Element,
  isLoop = false,
  isAutoplay = false,
  isPagination = false,
  isInteractive = false,
  isNavigation = false,
  navigationBreakpoints = {
    isMobile: true,
    isTablet: true,
    isDesktop: true,
  },
}) => {
  const breakpoints = {
    [mobile]: {
      navigation: {
        enabled: navigationBreakpoints.isMobile,
      },
    },
    [tablet]: {
      navigation: {
        enabled: navigationBreakpoints.isTablet,
      },
    },
    [desktop]: {
      navigation: {
        enabled: navigationBreakpoints.isDesktop,
      },
    },
  };

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={isAutoplay}
      loop={isLoop}
      pagination={{
        enabled: isPagination,
        type: 'bullets',
      }}
      allowTouchMove={isInteractive}
      grabCursor={isInteractive}
      navigation={isNavigation}
      breakpoints={breakpoints}
    >
      {data.map((props, index) => (
        <SwiperSlide key={index}>
          <Element {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
