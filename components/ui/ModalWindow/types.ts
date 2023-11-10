export interface ModalWindowProps {
  onModalClose: () => void;
  showModal: boolean;
  children: React.ReactNode;
  className?: string;
}
