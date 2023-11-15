import { Locale } from '@/i18n.config';
import type { CategoryDataInfo } from '@/types/Categories';

export interface CategoriesDropdownProps {
  lang?: Locale;
  label?: string;
  categories?: CategoryDataInfo[];
  currentCategory: string;
}
