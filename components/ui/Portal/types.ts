export type IStatus = 'entering' | 'entered' | 'exiting' | 'exited' | string;

export interface PortalProps {
  children: React.ReactNode;
  onModalClose: () => void;
  showModal: boolean;
  className?: string;
}
