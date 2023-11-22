import { Locale } from '@/i18n.config';
import { IProdDescription } from '@/types/Products';

export interface ProdCardSectionProps {
  prodDescription?: IProdDescription;
  className?: string;
  lang: Locale;
  category: string;
  product: string;
}
