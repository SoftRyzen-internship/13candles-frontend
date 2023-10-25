import Image from 'next/image';
import { BannerProps } from './types';

export const Banner: React.FC<BannerProps> = ({ src, alt }) => (
  <div className="h-[50wv] w-full sm:h-[240px] md:h-[384px] xl:mx-auto xl:h-[610px] xl:w-[1220px]">
    <Image
      className="h-full w-full object-cover object-center"
      width={1220}
      height={610}
      src={src}
      alt={alt}
      sizes="100wv"
    />
  </div>
);
