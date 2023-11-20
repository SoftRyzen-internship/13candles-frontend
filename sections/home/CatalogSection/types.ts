import { Locale } from '@/i18n.config';
import { StaticCategoryDataInfo } from '@/types/Categories';

export interface CatalogSectionProps {
  catalog: {
    title: string;
    subtitle: string;
    categories: StaticCategoryDataInfo[];
    serviceError: {
      subtitle: string;
      tip: string;
    };
  };
  lang: Locale;
}
