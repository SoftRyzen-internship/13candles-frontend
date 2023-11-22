import Link from 'next/link';

import { ProdCardSectionProps } from './types';

import { getDictionary } from '@/lib/dictionary';
import { fetchOneProduct } from '@/api/fetchOneProduct';
import { ProductSlider } from '@/components/ProductSlider';
import { ProductInfo } from '@/components/ProductInfo';

import IconArrowDown from '/public/icons/icon_arrow-down.svg';
import { fetchAromas } from '@/api/fetchAromas';

export const CardSection: React.FC<ProdCardSectionProps> = async ({
  className,
  lang,
  category,
  product,
}) => {
  const productData = await fetchOneProduct(lang, category, product);

  const aromasData = await fetchAromas(lang);

  if (productData?.length != 1) {
    return;
  }

  const {
    common: { orderModal },
    productpage: { back, product_description },
  } = await getDictionary(lang);

  const {
    attributes: { images },
  } = productData[0];

  return (
    <section
      className={`section pb-[32px] md:pb-[36px] xl:pb-[148px] ${className}`}
    >
      <div className="container">
        <div className="mb-8 border-b border-black-light/25 pb-[21px] md:mb-9 xl:mb-10 ">
          <Link
            href={`./${lang}/${category}`}
            className="link inline-flex items-center font-medium"
          >
            <IconArrowDown width={24} height={24} className="rotate-90" />

            <span className="ml-3 uppercase">{back}</span>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-[12px] md:flex-row md:gap-0">
          <ProductSlider images={images} />

          <ProductInfo
            product={productData[0]}
            prodDescription={product_description}
            orderDescription={orderModal}
            aromasData={aromasData}
          />
        </div>
      </div>
    </section>
  );
};
