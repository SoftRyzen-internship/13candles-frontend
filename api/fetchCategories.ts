import { request } from 'graphql-request';

import { Locale } from '@/i18n.config';

import { getCategories } from './requests/getCategories';
import { CategoriesData, CategoriesDataType } from '@/types/Categories';

export const fetchCategories = async (
  locale: Locale,
): Promise<CategoriesData> => {
  try {
    const data: CategoriesDataType = await request(
      process.env.API_BASE_URL as string,
      getCategories,
      { locale: locale },
    );

    const result = data.categories.data;
    return result;
  } catch (error) {
    return [];
  }
};
