import Link from 'next/link';

import { ProductSlider } from '@/components/ProductSlider';
import { ProductInfo } from '@/components/ProductInfo';

import { fetchOneProduct } from '@/api/fetchOneProduct';
import { fetchAromas } from '@/api/fetchAromas';

import { getDictionary } from '@/lib/dictionary';

import { ProdCardSectionProps } from './types';

import IconArrowDown from '/public/icons/icon_arrow-down.svg';

import { i18n } from '@/i18n.config';

export const CardSection: React.FC<ProdCardSectionProps> = async ({
  className = '',
  lang,
  category,
  product,
}) => {
  const localeProduct = await Promise.all(
    i18n.locales.map(async curr => {
      return {
        [curr]: await fetchOneProduct(curr, category, product),
      };
    }),
  );

  const productData = Object.assign({}, ...localeProduct);

  const aromasData = await fetchAromas(lang);

  const {
    businessPage: { form },
  } = await getDictionary(lang);

  if (productData[lang]?.length != 1) {
    return;
  }

  const {
    common: { orderModal },
    productpage: { back, product_description },
  } = await getDictionary(lang);

  const {
    attributes: { images },
  } = productData[lang][0];

  return (
    <section
      className={`section pb-[32px] md:pb-[36px] xl:pb-[148px] smOnly:pt-0 ${className}`}
    >
      <div className="container">
        <div className="mb-8 border-b border-black-light/25 pb-[21px] md:mb-9 xl:mb-10 ">
          <Link
            href={`./${lang}/${category}`}
            className="inline-flex items-center text-lg font-medium"
          >
            <IconArrowDown width={24} height={24} className="rotate-90" />

            <span className="link ml-3 uppercase">{back}</span>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-[12px] md:flex-row md:gap-0">
          <ProductSlider images={images} />

          <ProductInfo
            product={productData}
            prodDescription={product_description}
            orderDescription={orderModal}
            aromasData={aromasData}
            lang={lang}
            form={form}
          />
        </div>
      </div>
    </section>
  );
};
