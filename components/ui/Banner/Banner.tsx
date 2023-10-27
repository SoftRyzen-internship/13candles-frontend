import Image from 'next/image';
import { getBase64, shimmer } from '@/utils';
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
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(700, 475))}`}
    />
  </div>
);
