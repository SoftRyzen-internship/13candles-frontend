import { request } from 'graphql-request';

import { getBanners } from '@/api/requests/getBanners';

import { BannersData, BannersDataType } from '@/types/Banners';

import { Locale } from '@/i18n.config';

export const fetchBanners = async (locale: Locale): Promise<BannersData> => {
  try {
    const data: BannersDataType = await request(
      process.env.API_BASE_URL as string,
      getBanners,
      { locale: locale },
    );

    const result = data.banner.data.attributes.banners;
    return result;
  } catch (error) {
    return [];
  }
};
