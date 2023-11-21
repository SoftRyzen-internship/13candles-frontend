import { ProductDataInfo } from '@/types/Products';

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

export interface IProductInfo {
  product: ProductDataInfo;
  className?: string;
  prodDescription: IProdDescription;
}
