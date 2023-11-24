import { FormStaticDataT } from '@/types';
import { IOrderModalStatic } from '@/types/OrderModalStatic';

export type FooterNavRowProps = {
  data: {
    nav_text: string;
    nav: {
      name: string;
      href?: string;
    }[];
    forBusinessBtnText: string;
    basketText: string;
  };
  dataOrder: IOrderModalStatic;
  form: FormStaticDataT;
};
