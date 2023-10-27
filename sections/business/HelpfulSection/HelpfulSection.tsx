import { FC } from 'react';
import Image from 'next/image';

import { HelpfulSectionProps } from './types';

export const HelpfulSection: FC<HelpfulSectionProps> = ({
  staticData,
  image,
  className = '',
}) => {
  const { src, alt } = image;

  return (
    <section id="helpful" className={className}>
      <div className="container md:flex md:items-center md:justify-between">
        <div className="mb-6 flex h-[280px] w-full items-center overflow-hidden md:mb-0 md:h-[348px] md:w-[334px] xl:h-[604px] xl:w-[578px]">
          <Image src={src} width={578} height={604} alt={alt} />
        </div>

        <div className="md:w-[350px] xl:w-[578px]">
          <p className="mb-3 text-lg font-bold leading-[1.17] md:mb-4 md:text-xl xl:mb-10 xl:text-xxl smOnly:-tracking-[0.1px]">
            {staticData.title}
          </p>
          <p className="mb-3 text-justify leading-[1.17] xl:mb-4 xl:text-lg mdOnly:-tracking-[0.1px]">
            {staticData.description1}
          </p>
          <p className="text-justify leading-[1.17] xl:text-lg xl:-tracking-[0.18px]">
            {staticData.description2}
          </p>
        </div>
      </div>
    </section>
  );
};
