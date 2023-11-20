import { Locale } from '@/i18n.config';
import { ProductDataInfo } from '@/types/Products';

export interface ProductCardProps {
  product: ProductDataInfo;
  category: string;
  lang?: Locale;
  className?: string;
}
