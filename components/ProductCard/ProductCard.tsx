import React from 'react';
import classNames from 'classnames';

import Image from 'next/image';
import Link from 'next/link';

import { ProductCardProps } from './types';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  category,
  lang,
  className = '',
}) => {
  const {
    attributes: { title, slug, price, main_image, capacity = '' },
  } = product;

  const listClasses = classNames(
    'h-full zoom flex flex-col font-medium',
    className,
  );

  return (
    <Link href={`${lang}/${category}/${slug}`} className={listClasses}>
      <div className="relative h-[calc((100vw-(20px*2)+16px)/2)] overflow-hidden sm:h-[228px] md:h-[256px] xl:h-[380px]">
        <Image
          className="zoom-image h-full w-full object-cover object-center "
          src={main_image.photo.data.attributes.url}
          alt={main_image.image_description}
          width={296}
          height={380}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw"
        />
      </div>

      <p className="mb-[12px] mt-[20px]">{title}</p>
      <p className="mt-auto flex justify-between font-montserrat">
        <span>{`${price} ₴`}</span>
        {capacity && <span className=" text-gray">{capacity}</span>}
      </p>
    </Link>
  );
};

export default ProductCard;
