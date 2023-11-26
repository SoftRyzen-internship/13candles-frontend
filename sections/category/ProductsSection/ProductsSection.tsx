'use client';

import { useState } from 'react';

import { CategoriesDropdown } from '@/components/CategoriesDropdown';
import { ProductsList } from '@/components/ProductsList';
import { ShowMoreButton } from '@/components/ui/ShowMoreButton';

import { cutBrackets, filterProducts } from '@/utils';
import { useWindowDimensions } from '@/utils/useWindowDimension';

import { ProductsSectionProps } from './types';

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  lang,
  category,
  categories,
  products,
  staticData: { dropdown, loadMoreBtn, noContentText },
}) => {
  const [page, setPage] = useState(1);

  const { width } = useWindowDimensions();

  const initQty = width && width >= 768 && width < 1280 ? 9 : 8;

  const filteredProducts = filterProducts({
    products,
    initQty,
    page,
    perPage: initQty,
  });

  const handleShowMore = () => {
    setPage(prev => prev + 1);
  };

  const title =
    categories?.find(({ attributes: { slug } }) => slug === category)
      ?.attributes.title ?? dropdown.label;

  return (
    <section className="pb-12 pt-0 md:pb-9 md:pt-1 xl:pb-[100px] xl:pt-8">
      <div className="container">
        <h1 className="sr-only">{cutBrackets(title)}</h1>

        <div className="flex flex-col gap-4 md:gap-5">
          <CategoriesDropdown
            lang={lang}
            label={cutBrackets(title)}
            categories={categories}
            currentCategory={category}
          />

          {filteredProducts.length > 0 ? (
            <div className="flex flex-col gap-8 border-t-[1px] border-t-black-light/25 pt-5  md:pt-9 xl:gap-12 xl:pt-[97px]">
              <ProductsList
                products={filteredProducts}
                lang={lang}
                category={category}
              />

              {products && products?.length > filteredProducts.length && (
                <ShowMoreButton label={loadMoreBtn} onClick={handleShowMore} />
              )}
            </div>
          ) : (
            <div className="border-t-[1px] border-t-black-light/25 pt-5 text-center md:pt-9 xl:pt-[97px]">
              <p className="title-lg mb-6 smOnly:text-xl">
                {noContentText.subtitle}
              </p>

              <p className="text-lg font-medium xl:text-xl">
                {noContentText.tip}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
