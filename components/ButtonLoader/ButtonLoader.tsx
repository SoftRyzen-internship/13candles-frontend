import { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ButtonLoaderProps } from './types';

export const ButtonLoader: FC<ButtonLoaderProps> = ({ color, className }) => {
  return (
    <ThreeDots
      height="20"
      width="80"
      radius="4"
      color={color}
      ariaLabel="three-dots-loading"
      wrapperClass={className}
      visible={true}
    />
  );
};
