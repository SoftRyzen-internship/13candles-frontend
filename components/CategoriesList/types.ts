import { Locale } from '@/i18n.config';
import { CategoryDataInfo } from '@/types/Categories';

export interface CategoriesListProps {
  categories: CategoryDataInfo[];
  slugs?: CategorySlug[] | undefined;
  isStatic?: boolean;
  lang?: Locale;
  className?: string;
}

export type CategorySlug = {
  sequence_number: number;
  slug: string;
};
