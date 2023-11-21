import { AromaInfo } from '@/types/Aromas';

export interface IAroma {
  aromas?: {
    id: number;
    attributes: AromaInfo;
  }[];
}

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

export interface IProps extends IAroma {
  prodDescription: IProdDescription;
  className?: string;
}
