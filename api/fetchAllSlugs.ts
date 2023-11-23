import { request } from 'graphql-request';

import { getAllSlugs } from './requests/getAllSlugs';

import { Locale } from '@/i18n.config';
import { AllSlugsData, AllSlugsRes } from '@/types';

export const fetchAllSlugs = async (locale: Locale): Promise<AllSlugsRes> => {
  try {
    const data: AllSlugsData = await request(
      process.env.API_BASE_URL as string,
      getAllSlugs,
      { locale: locale },
    );

    const result = data.categories.data.map(
      ({ attributes: { slug, products } }) => {
        return {
          slug: slug,
          products: products.data.map(({ attributes: { slug } }) => slug),
        };
      },
    );

    return result;
  } catch (error) {
    return [];
  }
};
