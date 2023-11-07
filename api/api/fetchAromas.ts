import { request } from 'graphql-request';

import { getAromas } from '@/api/requests/getAromas';

import { AromasData, AromasDataType } from '@/types/Aromas';


export const fetchAromas = async (locale: 'en' | 'uk'): Promise<AromasData> => {
  try {
    const data: AromasDataType = await request(
      process.env.API_BASE_URL as string,
      getAromas,
      { locale: locale },
    );

    const result = data.aromas.data;
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
