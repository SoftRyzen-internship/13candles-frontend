import { ProductImageProps } from './types';

import Image from 'next/image';
import { getBase64, shimmer } from '@/utils';

export const ProductImage: React.FC<ProductImageProps> = ({
  photo: {
    data: {
      attributes: { url },
    },
  },
  image_description,
}) => (
  <div className="h-[320px] w-full md:h-[360px] xl:h-[650px]">
    <Image
      className="h-full w-full object-cover object-center"
      width={680}
      height={680}
      src={url}
      alt={image_description}
      sizes="(min-width: 768px) 50wv ,100wv"
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(400, 272))}`}
    />
  </div>
);
