import { CategorySlug } from '@/components/CategoriesList/types';

export type CategoriesData = CategoryDataInfo[] | undefined;

export interface CategoriesDataType {
  categories: {
    data: CategoryDataInfo[];
  };
}

export type CategoryDataInfo = {
  id: string;
  attributes: {
    title: string;
    sequence_number: number;
    image: {
      image_description: string;
      photo: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
};

export interface SlugsDataType {
  categories: {
    data: SlugsData[];
  };
}

export type SlugsData = {
  attributes: CategorySlug;
};
