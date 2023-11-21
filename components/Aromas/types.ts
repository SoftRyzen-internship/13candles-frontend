import { AromasData } from '@/types/Aromas';
import { Dispatch, SetStateAction } from 'react';

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

export interface IProps {
  prodDescription: IProdDescription;
  aromas: AromasData;
  setAromaName: Dispatch<SetStateAction<string>>;
  className?: string;
}
