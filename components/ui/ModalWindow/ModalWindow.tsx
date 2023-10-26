import classNames from 'classnames';
import { useParams } from 'next/navigation';

import { Portal } from '../Portal';
import { Locale } from '@/i18n.config';
import { ModalWindowPrps } from './types';

import data from '@/data/modalWindow.json';
import IconClose from '/public/icons/icon_close.svg';

export const ModalWindow: React.FC<ModalWindowPrps> = ({
  onModalClose,
  showModal,
  children,
  className = '',
}) => {
  const { lang }: { lang: Locale } = useParams();
  const { closeIconAriaLabel } = data;

  const modalClasses = classNames(
    'container relative z-40 my-10 h-[calc(100vh-80px)] overflow-auto bg-body pb-6 pt-[76px] md:py-8 xl:w-[1220px] xl:p-12',
    className,
  );

  return (
    <Portal onModalClose={onModalClose} showModal={showModal}>
      <div className={modalClasses}>
        <button
          type="button"
          aria-label={closeIconAriaLabel[lang]}
          onClick={onModalClose}
          className="absolute right-[20px] top-[36px] z-20 h-7 w-7 md:right-[32px] xl:right-[60px] xl:top-[50px]"
        >
          <IconClose
            width={28}
            height={28}
            className="xl:h-12 xl:w-12 xl:opacity-25"
          />
        </button>
        {children}
      </div>
    </Portal>
  );
};
