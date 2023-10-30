import { FC } from 'react';
import { ErrorNotificationProps } from './types';

export const ErrorNotification: FC<ErrorNotificationProps> = ({
  staticData,
}) => {
  return (
    <div className="py-[97px] text-center md:py-[128px] xl:py-[205px]">
      <p className="text-xl font-bold md:text-xxl xl:text-xxxl">{staticData}</p>
    </div>
  );
};
