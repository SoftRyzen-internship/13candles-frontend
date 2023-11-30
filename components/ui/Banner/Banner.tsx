import Image from 'next/image';
import { getBase64, shimmer } from '@/utils';
import { BannerProps } from './types';

export const Banner: React.FC<BannerProps> = ({
  photo: {
    data: {
      attributes: { url },
    },
  },
  image_description,
}) => (
  <div className="h-[50vw] w-full sm:h-[240px] md:h-[384px] xl:mx-auto xl:h-[610px] xl:w-[1220px]">
    <Image
      className="h-full w-full object-cover object-center"
      width={1220}
      height={610}
      priority
      src={url}
      alt={image_description}
      sizes="100wv"
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(700, 475))}`}
    />
  </div>
);
