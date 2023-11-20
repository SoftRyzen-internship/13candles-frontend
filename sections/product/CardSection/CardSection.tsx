//import { CategoriesList } from '@/components/CategoriesList';
import { CATALOG } from '@/data';

//import { fetchCategories } from '@/api/fetchCategories';

import { ProdCardSectionProps } from './types';
//import { StaticCategoriesList } from '@/components/CategoriesList/StaticCategoriesList';
import { fetchOneProduct } from '@/api/fetchOneProduct';
import { ProductSlider } from '@/components/ProductSlider';

export const CardSection: React.FC<ProdCardSectionProps> = async ({
  /*prodDescription,
  className,*/
  lang,
  category,
  product,
}) => {
  //  const categories = await fetchCategories(lang);
  const productData = await fetchOneProduct(lang, category, product);

  return (
    <section
      id={CATALOG}
      className="section md:pt-[76px] xl:pb-[50px] xl:pt-[15px]"
    >
      <div className="container">
        <p className="smOnly:pt-[200px]">
          Product page. Мова {lang}. Категорія {category}.
        </p>

        {productData && productData.length > 0 ? (
          <>
            {productData.map(
              ({
                attributes: {
                  title,
                  price,
                  description,
                  capacity,
                  /*main_image,*/
                  images,
                },
              }) => (
                <>
                  <ProductSlider images={images} />

                  <div key={title}>
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{capacity}</p>

                    <p>Price: {price}</p>
                  </div>
                </>
              ),
            )}
          </>
        ) : (
          <p>Something went wrong...</p>
        )}
      </div>
    </section>
  );
};
