'use client';

import { Banner } from '../ui/Banner';
import { Slider } from '../ui/Slider';

const banners = [
  {
    src: '/images/homepage/hero/1.webp',
    alt: 'Palo-santo',
  },
  {
    src: '/images/homepage/hero/2.webp',
    alt: 'Безкоштовна доставка',
  },
  {
    src: '/images/homepage/hero/4.webp',
    alt: 'Осіння колекція',
  },
];

export const BannerSlider = () => {
  return (
    <Slider
      data={banners}
      element={Banner}
      isAutoplay={true}
      isLoop={true}
      isNavigation={true}
      isPagination={true}
    />
  );
};
