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
    'container relative z-40 my-10 bg-body px-[10px] pb-6 pt-[76px] ',
    'md:px-4 md:py-8 xl:w-[1220px] xl:px-6 xl:py-12',
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
        <div
          className="max-h-[calc(100vh-80px-24px-76px)] overflow-auto px-[10px] 
                    md:max-h-[calc(100vh-80px-(32px*2))] md:px-4
                    xl:max-h-[calc(100vh-80px-(48px*2))] xl:px-6"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
