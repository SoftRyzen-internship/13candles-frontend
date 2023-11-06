export type BannersData = BannersDataInfo[] | undefined;

export interface BannersDataType {
  data: {
    banner: {
      data: {
        attributes: {
          locale: string;
          banners: BannersData;
        };
      };
    };
  };
}

export type BannersDataInfo = {
  id: number;
  image_description: string;
  photo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};
