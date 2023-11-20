import { ProductsData } from '@/types/Products';

type Args = {
  products: ProductsData;
  initQty: number;
  page: number;
  perPage: number;
};

export const filterProducts = ({ products, initQty, page, perPage }: Args) => {
  if (!products) return [];

  if (products.length <= initQty) return products;

  if (page === 1) {
    return products.slice(0, initQty);
  } else {
    return products.slice(0, page * perPage);
  }
};
