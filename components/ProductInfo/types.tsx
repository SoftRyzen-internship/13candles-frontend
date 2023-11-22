import { IProdDescription, ProductDataInfo } from '@/types/Products';
import { AromasData } from '@/types/Aromas';
import { IOrderModalStatic } from '@/types/OrderModalStatic';

export interface IProductInfo {
  product: ProductDataInfo;
  className?: string;
  prodDescription: IProdDescription;
  orderDescription: IOrderModalStatic;
  aromasData: AromasData;
}
