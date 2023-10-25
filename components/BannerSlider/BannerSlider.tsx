'use client';

import { Banner } from '../ui/Banner';
import { Slider } from '../ui/Slider';
import { BannerSliderProps } from './types';

export const BannerSlider: React.FC<BannerSliderProps> = ({
  banners,
  className,
}) => (
  <div className={className}>
    <Slider
      id="homepage-hero"
      data={banners}
      element={Banner}
      isAutoplay={true}
      isLoop={true}
      isPagination={true}
      isInteractive={true}
      isFadeEffect={true}
      isNavigation={true}
      navigationBreakpoints={{
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      }}
    />
  </div>
);
