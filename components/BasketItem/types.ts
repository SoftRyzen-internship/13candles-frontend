import { IItemsCartState } from '@/store/types';
import { IOrderCardStatic } from '@/types/OrderModalStatic';

export interface IBasketItemProps {
  productData: IItemsCartState;
  description: IOrderCardStatic;
}
