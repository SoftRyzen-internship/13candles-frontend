export interface ModalWindowPrps {
  onModalClose: () => void;
  showModal: boolean;
  children: React.ReactNode;
  className?: string;
}
