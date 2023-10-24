'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
  isNavigation = false,
  isPagination = false,
  isInteractive = false,
}) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={isAutoplay}
      loop={isLoop}
      navigation={{
        enabled: isNavigation,
      }}
      pagination={{
        enabled: isPagination,
        type: 'bullets',
      }}
      allowTouchMove={isInteractive}
      grabCursor={isInteractive}
    >
      {data.map((props, index) => (
        <SwiperSlide key={index}>
          <Element {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
