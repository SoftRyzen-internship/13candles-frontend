import { FormStaticDataT } from '@/types';
import { IOrderModalStatic } from '@/types/OrderModalStatic';

export interface BasketProps {
  title: string;
  data: IOrderModalStatic;
  form: FormStaticDataT;
}

export interface BasketStaticDictionary {
  title: string;
  emptyBasketText: {
    subtitle: string;
    tip: string;
  };
}
