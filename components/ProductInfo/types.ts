import { IProdDescription, ProductDataInfo } from '@/types/Products';
import { AromasData } from '@/types/Aromas';
import { IOrderModalStatic } from '@/types/OrderModalStatic';
import { Locale } from '@/i18n.config';
import { FormStaticDataT } from '@/types';

export interface IProductInfo {
  product: {
    uk: ProductDataInfo[];
    en: ProductDataInfo[];
  };
  className?: string;
  prodDescription: IProdDescription;
  orderDescription: IOrderModalStatic;
  aromasData: AromasData;
  lang: Locale;
  form: FormStaticDataT;
}
