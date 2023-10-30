import { FC } from 'react';
import { SuccessNotificationProps } from './types';

export const SuccessNotification: FC<SuccessNotificationProps> = ({
  staticData,
}) => {
  const { title, text } = staticData;
  return (
    <div className="mx-auto py-[76px] text-center md:py-[104px] xl:py-[179px] smOnly:max-w-[400px]">
      <p className="title-lg mb-6 smOnly:text-xl">{title}</p>
      <p className="text-lg font-medium xl:text-xl">{text}</p>
    </div>
  );
};
