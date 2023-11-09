import { Locale } from '@/i18n.config';
import { StaticCategoryDataInfo } from '@/types/Categories';

export interface CatalogSectionProps {
  catalog: {
    title: string;
    subtitle: string;
    categories: StaticCategoryDataInfo[];
  };
  lang: Locale;
}
