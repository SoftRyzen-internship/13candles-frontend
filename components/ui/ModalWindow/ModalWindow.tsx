import { useParams } from 'next/navigation';
import { Portal } from '../Portal';
import { ModalWindowPrps } from './types';
import { Locale } from '@/i18n.config';
import data from '@/data/modalWindow.json';
import IconClose from '/public/icons/icon_close.svg';
import classNames from 'classnames';

export const ModalWindow: React.FC<ModalWindowPrps> = ({
  onModalClose,
  showModal,
  children,
  className = '',
}) => {
  const { lang }: { lang: Locale } = useParams();
  const { closeIconAriaLabel } = data;

  const modalClasses = classNames(
    'container relative z-40 mt-[252px] bg-body xl:max-w-[1220px] xl:p-12',
    className,
  );

  return (
    <Portal onModalClose={onModalClose} showModal={showModal}>
      <div className={modalClasses}>
        <button
          type="button"
          aria-label={closeIconAriaLabel[lang]}
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
