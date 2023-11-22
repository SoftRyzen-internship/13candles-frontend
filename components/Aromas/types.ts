import { AromasData } from '@/types/Aromas';
import { IProdDescription } from '@/types/Products';
import { Dispatch, SetStateAction } from 'react';

export interface IProps {
  prodDescription: IProdDescription;
  aromas: AromasData;
  setAromaName: Dispatch<SetStateAction<string>>;
  className?: string;
}
