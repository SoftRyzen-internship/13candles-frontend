import { FC } from 'react';
import { SuccessNotificationProps } from './types';

export const SuccessNotification: FC<SuccessNotificationProps> = ({
  staticData,
}) => {
  const { title, text } = staticData;
  return (
    <div className="mx-auto pb-[42px] text-center md:pb-[70px] xl:py-[131px] smOnly:max-w-[400px]">
      <p className="title-lg mb-6 smOnly:text-xl">{title}</p>
      <p className="text-lg font-medium xl:text-xl">{text}</p>
    </div>
  );
};
