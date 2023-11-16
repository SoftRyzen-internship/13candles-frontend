import React from 'react';
import { ProductCardProps } from './types';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  lang,
  category,
  className = '',
}) => {
  const {
    attributes: { title, slug, price, main_image, capacity = '' },
  } = product;

  const listClasses = classNames('h-full zoom flex flex-col', className);

  return (
    <Link href={`${lang}/${category}/${slug}`} className={listClasses}>
      <div className="relative h-[calc((100vw-(20px*2)-16px)/2)] overflow-hidden sm:h-[148px] md:h-[256px] xl:h-[380px]">
        <Image
          className="zoom-image h-full w-full object-cover object-center "
          src={main_image.photo.data.attributes.url}
          alt={main_image.image_description}
          width={224}
          height={256}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw"
        />
      </div>

      <div className="mt-[20px] flex grow flex-col font-medium">
        <p className="pb-[12px]">{title}</p>
        <p className="mt-auto flex justify-between font-montserrat">
          <span>{`${price} ₴`}</span>
          <span className=" text-gray">{capacity}</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
