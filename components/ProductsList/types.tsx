import { Locale } from '@/i18n.config';
import { ProductDataInfo } from '@/types/Products';

export interface ProductsListProps {
  products: ProductDataInfo[];
  lang?: Locale;
  category: string;
  className?: string;
}
