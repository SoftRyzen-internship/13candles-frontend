import { Locale } from '@/i18n.config';

export interface IProdDescription {
  amount: string;
  aroma: string;
  notes: string;
  sweetness: string;
  astringency: string;
  freshness: string;
  add: string;
  purchase: string;
}

export interface ProdCardSectionProps {
  prodDescription?: IProdDescription;
  className?: string;
  lang: Locale;
  category: string;
  product: string;
}
