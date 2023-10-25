import { Portal } from '../Portal';
import { ModalWindowPrps } from './types';
import IconClose from '/public/icons/icon_close.svg';

export const ModalWindow: React.FC<ModalWindowPrps> = ({
  onModalClose,
  showModal,
  children,
  className = '',
}) => {
  // const ariaLabel = 'Кнопка закриття мобадтно вікна';
  const ariaLabel = 'Modal close button';

  return (
    <Portal onModalClose={onModalClose} showModal={showModal}>
      <div
        className={`container relative z-40 mt-[252px] bg-body xl:max-w-[1220px] xl:p-12 ${className}`}
      >
        <button
          type="button"
          aria-label={ariaLabel}
          onClick={onModalClose}
          className="absolute right-[20px] top-[36px] z-20 h-7 w-7 md:right-[32px]"
        >
          <IconClose width={28} height={28} />
        </button>
        {children}
      </div>
    </Portal>
  );
};
