import Image from 'next/image';
import { BannerProps } from './types';

export const Banner: React.FC<BannerProps> = ({ src, alt }) => (
  <div className="h-[176px] w-full md:h-[440px] xl:mx-auto xl:h-[540px] xl:w-[1000px]">
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
