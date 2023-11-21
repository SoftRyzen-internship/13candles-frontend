import { ProductDataInfo } from '@/types/Products';
import { AromasData } from '@/types/Aromas';
import { IOrderModalStatic } from '@/types/OrderModalStatic';

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
  orderDescription: IOrderModalStatic;
  aromasData: AromasData;
}
