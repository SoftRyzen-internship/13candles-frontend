import { Dispatch, SetStateAction } from 'react';

export interface ICounterProps {
  size?: 'sm';
  caption?: string;
  className?: string;
  count: number;
  ariaMinus?: string;
  ariaPlus?: string;

  // eslint-disable-next-line no-unused-vars
  setCount: (num: number) => void | Dispatch<SetStateAction<number>>;
}
