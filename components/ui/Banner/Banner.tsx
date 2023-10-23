import Image from 'next/image';
import { BannerProps } from './types';

export const Banner: React.FC<BannerProps> = ({ src, alt }) => (
  <div className="h-[174px] w-full md:h-[400px] xl:mx-auto xl:h-[580px] xl:w-[1164px]">
    <Image
      className="h-full w-full object-cover object-center"
      width={1000}
      height={450}
      src={src}
      alt={alt}
      sizes="100wv"
    />
  </div>
);
