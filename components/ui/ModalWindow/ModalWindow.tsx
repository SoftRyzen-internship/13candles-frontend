import IconClose from '/public/icons/icon_close.svg';
import { IPortal } from '@/components/ui/Portal/types';

export const ModalWindow = ({
  onModalClose,
  children,
  className = '',
}: IPortal) => {
  return (
    <div
      className={`xl:max-w-[1220px]xl:p-12 container relative z-40 mt-[252px] bg-body ${className}`}
    >
      <button
        type="button"
        onClick={onModalClose}
        className="absolute right-[20px] top-[36px] z-20 h-7 w-7 md:right-[32px]"
      >
        <IconClose />
      </button>
      {children}
    </div>
  );
};
