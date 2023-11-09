import { CategorySlug } from '@/components/CategoriesList/types';
import { Image } from './commons';

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
    slug: string;
    sequence_number: number;
    image: Image;
  };
};

export type StaticCategoryDataInfo = {
  id: string;
  attributes: {
    title: string;
    sequence_number: number;
    image: Image;
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
