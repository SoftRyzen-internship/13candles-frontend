import { request } from 'graphql-request';

import { getBanners } from '@/api/requests/getBanners';

import { BannersData, BannersDataType } from '@/types/Banners';

export const fetchBanners = async (): Promise<BannersData> => {
  try {
    const data: BannersDataType = await request(
      process.env.API_BASE_URL as string,
      getBanners,
    );

    const result = data.data.banner.data.attributes.banners;
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
