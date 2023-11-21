import { IOrderModalStatic } from '@/types/OrderModalStatic';

export interface BasketProps {
  title: string;
  data: IOrderModalStatic;
}

export interface BasketStaticDictionary {
  title: string;
  emptyBasketText: {
    subtitle: string;
    tip: string;
  };
}
