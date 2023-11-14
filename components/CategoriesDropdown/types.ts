import { Locale } from '@/i18n.config';
import type { CategoryDataInfo } from '@/types/Categories';

export interface CategoriesDropdownProps {
  lang?: Locale;
  categories?: CategoryDataInfo[];
  currentCategory: string;
}
