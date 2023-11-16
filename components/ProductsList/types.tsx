import { Locale } from '@/i18n.config';
import { ProductDataInfo } from '@/types/Products';

export interface ProductsListProps {
  products: ProductDataInfo[];
  category: string;
  lang?: Locale;
  className?: string;
}
