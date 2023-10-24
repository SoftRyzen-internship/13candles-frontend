import React from 'react';

import { ButtonProps } from './types';

export const ButtonOpenModal: React.FC<ButtonProps> = ({
  children,
  className = '',
  onModalOpen,
  setTypeContent,
  typeContent,
}) => {
  const content = !!setTypeContent && !!typeContent;
  return (
    <button
      type="button"
      onClick={() => {
        onModalOpen();

        {
          content && setTypeContent(typeContent);
        }
      }}
      className={className}
    >
      {children}
    </button>
  );
};
