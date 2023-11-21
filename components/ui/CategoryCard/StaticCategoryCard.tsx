'use client';

import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { ModalWindow } from '../ModalWindow';
import { ServiceErrorNotification } from '@/components/ServiceErrorNotification';

import { StaticCategoryCardProps } from './types';

export const StaticCategoryCard: React.FC<StaticCategoryCardProps> = ({
  category: {
    attributes: {
      title,
      image: {
        image_description,
        photo: {
          data: {
            attributes: { url },
          },
        },
      },
    },
  },
  errorText,
  className = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const onToggleShowModal = () => setShowModal(prev => !prev);

  const cardClasses = classNames('zoom block', className);

  return (
    <>
      <button type="button" className={cardClasses} onClick={onToggleShowModal}>
        <div className="relative mb-3 h-[calc((100vw-(20px*2)-16px)/2)] overflow-hidden sm:h-[212px] md:h-[256px] xl:mb-5 xl:h-[224px]">
          <Image
            className="zoom-image h-full w-full object-cover object-center"
            src={url}
            alt={image_description}
            width={224}
            height={256}
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 17vw"
          />
        </div>

        <p className="text-center font-medium">{title}</p>
      </button>

      <ModalWindow onModalClose={onToggleShowModal} showModal={showModal}>
        <ServiceErrorNotification text={errorText} />
      </ModalWindow>
    </>
  );
};
