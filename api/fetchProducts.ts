import { request } from 'graphql-request';

import { Locale } from '@/i18n.config';

import { getProducts } from './requests/getProducts';
import { ProductsData, ProductsDataType } from '@/types/Products';

export const fetchProducts = async (
  locale: Locale,
  category: string,
): Promise<ProductsData> => {
  try {
    const data: ProductsDataType = await request(
      process.env.API_BASE_URL as string,
      getProducts,
      { locale: locale, category: category },
    );

    const result = data.products.data;
    return result;
  } catch (error) {
    return [];
  }
};
