'use client';

import { useState } from 'react';

import ProductsList from '@/components/ProductsList/ProductsList';
import { CategoriesDropdown } from '@/components/CategoriesDropdown';

import { filterProducts, useWindowDimensions } from '@/utils';

import { ProductsSectionProps } from './types';

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  lang,
  category,
  categories,
  products,
  staticData: { dropdown, loadMoreBtn, noContentText },
}) => {
  const [page, setPage] = useState(1);
  const perPage = 12;

  const { width } = useWindowDimensions();

  const initQty = width && width >= 768 && width < 1280 ? 9 : 8;

  const filteredProducts = filterProducts({ products, initQty, page, perPage });

  const handleShowMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <section className="pb-12 pt-[120px] md:pb-9 md:pt-1 xl:pb-[100px] xl:pt-8">
      <div className="container">
        <div className="flex flex-col gap-4 md:gap-5">
          <CategoriesDropdown
            lang={lang}
            label={dropdown.label}
            categories={categories}
            currentCategory={category}
          />

          {filteredProducts.length > 0 ? (
            <div className="flex flex-col gap-8 md:border-t-[1px] md:border-t-black-light/25  md:pt-9 xl:gap-12 xl:pt-[97px]">
              <ProductsList
                products={filteredProducts}
                lang={lang}
                category={category}
              />

              {products && products?.length > filteredProducts.length && (
                <button
                  onClick={handleShowMore}
                  className="common-transition w-full border-[1px] border-transparent bg-black-light py-3 text-center text-lg font-medium text-white hover:border-black-light hover:bg-white hover:text-black-light focus:border-black-light focus:bg-white focus:text-black-light md:w-[218px] md:self-center"
                >
                  {loadMoreBtn}
                </button>
              )}
            </div>
          ) : (
            <div className="pt-4 text-center md:pt-9">
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
