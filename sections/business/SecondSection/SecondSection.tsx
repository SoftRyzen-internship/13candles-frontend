import { FC } from 'react';
import Image from 'next/image';

import { SecondSectionProps } from './types';

export const SecondSection: FC<SecondSectionProps> = ({
  staticData,
  image,
  className = '',
}) => {
  const { src, alt } = image;

  return (
    <section id="second" className={className}>
      <div className="container bg-blue-300">
        <div className="mb-6 flex h-[200px] w-full items-center overflow-hidden md:mb-9 md:h-[312px] xl:mb-12 xl:h-[545px]">
          <Image
            src={src}
            width={1220}
            height={899}
            alt={alt}
            className="grayscale transition-all duration-300"
          />
        </div>
        <ul className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0">
          {staticData.map(item => {
            return (
              <li key={item.title} className="md:w-[213px] xl:w-[364px]">
                <div>
                  <p className="mb-3 xl:mb-6">{item.title}</p>
                  <p className="text-justify">
                    {item.regularDescription1}
                    <span className="whitespace-pre-wrap font-semibold">
                      {item.accentDescription}
                    </span>
                    {item.regularDescription2}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};