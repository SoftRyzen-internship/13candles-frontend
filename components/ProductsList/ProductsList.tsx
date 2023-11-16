import React from 'react';
import { ProductsListProps } from './types';
import classNames from 'classnames';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  lang,
  category,
  className,
}) => {
  const listClasses = classNames(
    'flex flex-wrap gap-[16px] xl:gap-[24px] ',
    className,
  );

  return (
    <ul className={listClasses}>
      {products.map(product => (
        <li
          key={product.id}
          className="basis-[calc((100%-16px)/2)] md:basis-[calc((100%-(16px*2))/3)] xl:basis-[calc((100%-(24px*3))/4)]"
        >
          <ProductCard product={product} lang={lang} category={category} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
