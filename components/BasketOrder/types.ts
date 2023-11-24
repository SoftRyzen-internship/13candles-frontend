import { IItemsCartState } from '@/store/types';
import { IOrderCardStatic } from '@/types/OrderModalStatic';

export interface IBasketOrderProps {
  products: IItemsCartState[];
  description: IOrderCardStatic;
}

export interface BasketStaticDictionary {
  title: string;
  emptyBasketText: {
    subtitle: string;
    tip: string;
  };
}
