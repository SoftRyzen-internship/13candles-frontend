import { request } from 'graphql-request';

import { getAromas } from '@/api/requests/getAromas';

import { AromasData, AromasDataType } from '@/types/Aromas';
import { Locale } from '@/i18n.config';

export const fetchAromas = async (locale: Locale): Promise<AromasData> => {
  try {
    const data: AromasDataType = await request(
      process.env.API_BASE_URL as string,
      getAromas,
      { locale: locale },
    );

    console.log(request);

    const result = data.aromas.data;
    return result;
  } catch (error) {
    return [];
  }
};
