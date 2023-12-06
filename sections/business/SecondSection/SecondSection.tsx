import { FC } from 'react';
import Image from 'next/image';

import { SecondSectionProps } from './types';

export const SecondSection: FC<SecondSectionProps> = ({
  staticData,
  image,
}) => {
  const { src, alt } = image;

  return (
    <section id="second" className="section xl:py-[50px]">
      <div className="container">
        <div className="mb-6 flex h-[200px] w-full items-center overflow-hidden md:mb-9 md:h-[312px] xl:mb-12 xl:h-[545px]">
          <Image
            src={src}
            width={1220}
            height={899}
            alt={alt}
            sizes="(max-width: 767px) 440px, (max-width: 1279px) 704px, 1220px"
            className="grayscale transition-all duration-300"
            priority
          />
        </div>
        <ul className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0">
          {staticData.map(item => {
            return (
              <li key={item.title} className="md:w-[213px] xl:w-[364px]">
                <p className="mb-3 font-bold leading-[1.17] xl:mb-6 xl:text-lg">
                  {item.title}
                </p>
                <p className="text-justify leading-[1.17] xl:text-lg">
                  {item.regularDescription1}
                  <span className="whitespace-pre-wrap font-semibold">
                    {item.accentDescription}
                  </span>
                  {item.regularDescription2}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
