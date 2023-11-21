//import { CategoriesList } from '@/components/CategoriesList';
//import { CATALOG } from '@/data';

//import { fetchCategories } from '@/api/fetchCategories';

import { ProdCardSectionProps } from './types';
//import { StaticCategoriesList } from '@/components/CategoriesList/StaticCategoriesList';
import { fetchOneProduct } from '@/api/fetchOneProduct';
import { ProductSlider } from '@/components/ProductSlider';
import { ProductInfo } from '@/components/ProductInfo';
import { getDictionary } from '@/lib/dictionary';

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
      <div className="container flex flex-col justify-between md:flex-row">
        <ProductSlider images={images} />
        <ProductInfo
          product={productData[0]}
          prodDescription={product_description}
        />
      </div>
    </section>
  );
};
