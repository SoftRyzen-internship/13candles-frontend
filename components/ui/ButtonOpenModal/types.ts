export type TypeContentModal = 'basket' | 'contract' |'guarantees' |'delivery'|'rules' ;


export interface ButtonProps {
  children: React.ReactNode;
  onModalOpen: () => void;
  setTypeContent?:  React.Dispatch<React.SetStateAction<string>>;
  typeContent?: TypeContentModal;
  className?: string;
}
