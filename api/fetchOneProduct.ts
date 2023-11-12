import { request } from 'graphql-request';

import { Locale } from '@/i18n.config';
import { ProductsData, ProductsDataType } from '@/types/Products';

import { getOneProduct } from './requests/getOneProduct';

export const fetchOneProduct = async (
  locale: Locale,
  category: string,
  product: string,
): Promise<ProductsData> => {
  try {
    const data: ProductsDataType = await request(
      process.env.API_BASE_URL as string,
      getOneProduct,
      { locale: locale, category: category, product: product },
    );

    const result = data.products.data;
    return result;
  } catch (error) {
    return [];
  }
};
