import Link from 'next/link';

import { ProdCardSectionProps } from './types';

import { getDictionary } from '@/lib/dictionary';
import { fetchOneProduct } from '@/api/fetchOneProduct';
import { ProductSlider } from '@/components/ProductSlider';
import { ProductInfo } from '@/components/ProductInfo';

import IconArrowDown from '/public/icons/icon_arrow-down.svg';

export const CardSection: React.FC<ProdCardSectionProps> = async ({
  /*className,*/
  lang,
  category,
  product,
}) => {
  //  const categories = await fetchCategories(lang);
  const productData = await fetchOneProduct(lang, category, product);
  if (productData?.length != 1) {
    return;
  }

  const {
    productpage: { product_description },
  } = await getDictionary(lang);
  const {
    attributes: { images },
  } = productData[0];

  return (
    <section className="section md:pt-[76px] xl:pb-[50px] xl:pt-[15px]">
      <div className="container">
        <div className="mb-8 border-b border-black-light/25 md:mb-9 xl:mb-10">
          <Link
            href={`./${lang}/${category}`}
            className="link inline-flex items-center font-medium"
          >
            <IconArrowDown width={24} height={24} className="rotate-90" />

            <span className="pl-3">Назад!!!!</span>
          </Link>
        </div>

        <div className="flex flex-col justify-between md:flex-row">
          <ProductSlider images={images} />

          <ProductInfo
            product={productData[0]}
            prodDescription={product_description}
          />
        </div>
      </div>
    </section>
  );
};
