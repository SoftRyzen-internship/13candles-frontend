import { request } from 'graphql-request';

import { getSlugs } from './requests/getSlugs';

import { SlugsDataType } from '@/types/Categories';
import { CategorySlug } from '@/components/CategoriesList/types';
import { Locale } from '@/i18n.config';

export const fetchSlugs = async (locale: Locale): Promise<CategorySlug[]> => {
  try {
    const data: SlugsDataType = await request(
      process.env.API_BASE_URL as string,
      getSlugs,
      { locale: locale },
    );

    const result = data.categories.data.map(el => el.attributes);

    return result;
  } catch (error) {
    return [];
  }
};
