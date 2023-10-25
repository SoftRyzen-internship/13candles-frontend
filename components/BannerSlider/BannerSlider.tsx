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
      data={banners}
      element={Banner}
      isAutoplay={true}
      isLoop={true}
      isPagination={true}
      isNavigation={true}
      isInteractive={true}
      navigationBreakpoints={{
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      }}
    />
  </div>
);
