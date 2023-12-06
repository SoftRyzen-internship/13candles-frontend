import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { OurManufactureSectionProps } from './types';

export const OurManufactureSection: FC<OurManufactureSectionProps> = ({
  image,
  textBlock,
  className = '',
}) => {
  const { src, alt } = image;
  const { title, description1, description2, description3 } = textBlock;

  const sectionClass = classNames('section xl:py-[50px]', className);
  return (
    <section id="manufacture" className={sectionClass}>
      <div className="container flex md:justify-between smOnly:flex-col-reverse">
        <div className="md:w-[334px] xl:mt-[15px] xl:w-[578px]">
          <h2 className="mb-4 text-lg font-bold leading-[1.17] md:text-xl xl:mb-10 xl:text-xxl">
            {title}
          </h2>
          <p className="mb-3 text-justify xl:mb-4 xl:text-lg xl:leading-[1.15]">
            {description1}
          </p>
          <p className="mb-3 text-justify xl:mb-4 xl:text-lg xl:leading-[1.15]">
            {description2}
          </p>
          <p className="text-justify xl:text-lg xl:leading-[1.15]">
            {description3}
          </p>
        </div>

        <div className="flex h-[212px] w-full items-center overflow-hidden md:mt-[36px] md:h-[264px] md:w-[350px] xl:mt-0 xl:h-[438px] xl:w-[578px] smOnly:mb-6">
          <Image
            src={src}
            width={578}
            height={438}
            alt={alt}
            sizes="(max-width: 767px) 440px, (max-width: 1279px) 350px, 578px"
          />
        </div>
      </div>
    </section>
  );
};
