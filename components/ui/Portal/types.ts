import { ReactNode } from 'react';

export type IStatus = 'entering' | 'entered' | 'exiting' | 'exited' | string;

export interface IPortal {
  children: ReactNode;
  onModalClose: () => void;
  className?: string;
  showModal?: boolean;
}
