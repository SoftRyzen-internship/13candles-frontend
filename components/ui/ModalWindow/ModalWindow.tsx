'use client';

import classNames from 'classnames';
import { useParams } from 'next/navigation';

import { Portal } from '../Portal';
import { Locale } from '@/i18n.config';
import { ModalWindowProps } from './types';

// import data from '@/data/modalWindow.json';
import IconClose from '/public/icons/icon_close.svg';

export const ModalWindow: React.FC<ModalWindowProps> = ({
  onModalClose,
  showModal,
  children,
  className = '',
}) => {
  const { lang }: { lang?: Locale } = useParams();
  // const { closeIconAriaLabel } = data;

  const modalClasses = classNames(
    'container relative z-40 my-10 bg-body px-[10px] pb-8 pt-[60px] md:px-4 xl:w-[1220px] xl:px-6',
    className,
  );

  return (
    <Portal onModalClose={onModalClose} showModal={showModal}>
      <div className={modalClasses}>
        <button
          type="button"
          aria-label={
            lang === 'en'
              ? 'Modal close button'
              : 'Кнопка закриття модального вікна'
          }
          onClick={onModalClose}
          className="absolute right-[14px] top-[20px] z-20 h-fit w-fit md:right-[26px]"
        >
          <IconClose
            width={28}
            height={28}
            className="xl:h-10 xl:w-10 xl:opacity-25"
          />
        </button>
        <div
          // content height = calc(100vh - margin and padding of the modal window)
          // this way the scroll bar is inside the modal window
          className="max-h-[calc(100vh-80px-60px-32px)] overflow-auto px-[10px] md:px-4 xl:px-6"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
