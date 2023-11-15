'use client';

import { ProductSliderProps } from './types';

import classNames from 'classnames';

import { Slider } from '../ui/Slider';
import { ProductImage } from '../ui/ProductImage';

export const ProductSlider: React.FC<ProductSliderProps> = ({
  images,
  className = '',
}) => {
  const slides = images.length > 1 ? images : [...images, ...images]; // to keep slider interactive in the case of 1 available slide

  const wrapClasses = classNames('w-full md:w-[360px] xl:w-[652px]', className);

  return (
    <div className={wrapClasses}>
      <Slider
        id="product-page"
        data={slides}
        element={ProductImage}
        isNavigation={images.length > 1}
        isLoop={true}
        isInteractive={true}
      />
    </div>
  );
};
