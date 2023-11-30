'use client';

import classNames from 'classnames';

import { Slider } from '../ui/Slider';
import { ProductImage } from '../ui/ProductImage';

import { ProductSliderProps } from './types';

export const ProductSlider: React.FC<ProductSliderProps> = ({
  images,
  className = '',
}) => {
  const wrapClasses = classNames(
    'w-full overflow-hidden md:w-[360px] xl:w-[652px] smOnly:aspect-[280/320]',
    className,
  );

  return (
    <div className={wrapClasses}>
      <Slider
        id="product-page"
        data={images}
        element={ProductImage}
        isNavigation={images.length > 1}
        isLoop={true}
        isInteractive={true}
      />
    </div>
  );
};
