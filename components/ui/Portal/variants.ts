import { IStatus } from './types';

export const duration = 300;

export const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

export const transitionStyles: Record<IStatus, { opacity: number }> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
