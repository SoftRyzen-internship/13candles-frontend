'use client';

import classNames from 'classnames';

import { Slider } from '../ui/Slider';
import { ProductImage } from '../ui/ProductImage';

import { ProductSliderProps } from './types';

export const ProductSlider: React.FC<ProductSliderProps> = ({
  images,
  className = '',
}) => {
  const wrapClasses = classNames('w-full md:w-[360px] xl:w-[652px]', className);

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
