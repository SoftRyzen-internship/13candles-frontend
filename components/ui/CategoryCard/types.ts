import { Locale } from '@/i18n.config';
import { Image } from '@/types/commons';

export interface CategoryCardProps {
  category: CategoryDynamicDataInfo;
  lang?: Locale;
  className?: string;
}

export interface StaticCategoryCardProps {
  category: CategoryStaticDataInfo;
  errorText: {
    subtitle: string;
    tip: string;
  };
  className?: string;
}

type CategoryStaticDataInfo = {
  id: string;
  attributes: {
    title: string;
    sequence_number: number;
    image: Image;
  };
};

type CategoryDynamicDataInfo = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    sequence_number: number;
    image: Image;
  };
};
