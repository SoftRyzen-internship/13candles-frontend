import { Locale } from '@/i18n.config';
import { CategoryDataInfo } from '@/types/Categories';

export interface CatalogSectionProps {
  catalog: {
    title: string;
    subtitle: string;
    categories: CategoryDataInfo[];
  };
  lang: Locale;
}
