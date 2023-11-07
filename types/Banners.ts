import { Locale } from '@/i18n.config';

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

export type BannersDataInfo = {
  image_description: string;
  photo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};
