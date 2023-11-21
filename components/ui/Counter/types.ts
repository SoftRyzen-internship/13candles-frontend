import { Dispatch, SetStateAction } from 'react';

export interface ICounterProps {
  size?: 'sm';
  caption?: string;
  className?: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
