import { FormStaticDataT } from '@/types';
import { IOrderModalStatic } from '@/types/OrderModalStatic';

export interface BasketButtonProps {
  isIcon: boolean;
  data: IOrderModalStatic;
  form: FormStaticDataT;
  text?: string;
  className?: string;
}
