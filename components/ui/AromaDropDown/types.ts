import { Dispatch, SetStateAction } from 'react';
import { AromasData } from '@/types/Aromas';

export interface IDropDown {
  setShownItem: Dispatch<SetStateAction<number>>;
  aromas: AromasData;
  shownItem: number;
  className?: string;
}
