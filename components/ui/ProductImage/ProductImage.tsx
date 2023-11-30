import Image from 'next/image';

import { getBase64, shimmer } from '@/utils';

import type { Image as ImageType } from '@/types/commons';

export const ProductImage: React.FC<ImageType> = ({
  photo: {
    data: {
      attributes: { url },
    },
  },
  image_description,
}) => (
  <div className="h-full w-full md:h-[360px] xl:h-[650px]">
    <Image
      className="h-full w-full object-cover object-center"
      width={652}
      height={650}
      priority
      src={url}
      alt={image_description}
      sizes="(min-width: 768px) 50wv ,100wv"
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(400, 272))}`}
    />
  </div>
);
