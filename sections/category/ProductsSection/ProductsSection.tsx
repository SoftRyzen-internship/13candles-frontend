'use client';

import { useState } from 'react';
import { ProductsSectionProps } from './types';

import ProductsList from '@/components/ProductsList/ProductsList';
import { useWindowDimensions } from '@/utils';
import { CategoriesDropdown } from '@/components/CategoriesDropdown';

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  lang,
  category,
  categories,
  products,
  staticData: { dropdown },
}) => {
  //   console.log('products length:', products?.length);
  const [page, setPage] = useState(1);
  const perPage = 12;

  const { width } = useWindowDimensions();

  const initQty = width && width >= 768 && width < 1280 ? 9 : 8;

  const filterdProducts = !products
    ? []
    : products.length <= initQty
    ? products
    : page === 1
    ? products.slice(0, initQty)
    : products.slice(0, page * perPage);

  const handleShowMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <section className="section">
      <div className="container">
        <CategoriesDropdown
          lang={lang}
          label={dropdown.label}
          categories={categories}
          currentCategory={category}
        />

        {filterdProducts.length > 0 ? (
          <div>
            <ProductsList
              products={filterdProducts}
              lang={lang}
              category={category}
            />

            {products && products?.length > filterdProducts.length && (
              <button onClick={handleShowMore} className="mt-4">
                Show more...
              </button>
            )}
          </div>
        ) : (
          <div>No products here...</div>
        )}
      </div>
    </section>
  );
};
