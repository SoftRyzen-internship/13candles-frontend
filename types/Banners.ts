import { Locale } from '@/i18n.config';
import { Image } from './commons';

export type BannersData = BannersDataInfo[] | undefined;

export interface BannersDataType {
  banner: {
    data: {
      attributes: {
        locale: Locale;
        banners: BannersData;
      };
    };
  };
}

export type BannersDataInfo = Image;
