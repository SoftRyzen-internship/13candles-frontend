import { Dispatch, SetStateAction } from 'react';
import { IAroma } from '../types';

export interface IDropDown extends IAroma {
  setShownItem: Dispatch<SetStateAction<number>>;
  shownItem: number;
  className?: string;
}
