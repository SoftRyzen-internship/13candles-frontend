import { Locale } from '@/i18n.config';
import { CategoryDataInfo, StaticCategoryDataInfo } from '@/types/Categories';

export interface CategoriesListProps {
  categories: CategoryDataInfo[];
  lang?: Locale;
  className?: string;
}

export interface StaticCategoriesListProps {
  staticCategories: StaticCategoryDataInfo[];
  errorText: {
    subtitle: string;
    tip: string;
  };
  className?: string;
}

export type CategorySlug = {
  sequence_number: number;
  slug: string;
};
