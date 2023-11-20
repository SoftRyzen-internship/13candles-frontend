import { Locale } from '@/i18n.config';
import { StaticCategoryDataInfo } from '@/types/Categories';

export interface CatalogSectionProps {
  catalog: {
    home_title: string;
    product_title: string;
    subtitle: string;
    categories: StaticCategoryDataInfo[];
  };
  thisPage: 'home' | 'product';
  lang: Locale;
}
