import { request } from 'graphql-request';

import { getInfo } from './requests/getInfo';

import { Locale } from '@/i18n.config';
import { InfoData, InfoDataType } from '@/types/Info';

export const fetchInfo = async (locale: Locale): Promise<InfoData> => {
  try {
    const data: InfoDataType = await request(
      process.env.API_BASE_URL as string,
      getInfo,
      { locale: locale },
    );

    const result = data.information.data.attributes;
    return result;
  } catch (error) {
    return {
      contract_offer: '',
      warranty_and_returns: '',
      delivery_and_payment: '',
      website_terms_of_use: '',
    } as InfoData;
  }
};
