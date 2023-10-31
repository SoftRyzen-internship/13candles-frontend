import { FC } from 'react';
import { ErrorNotificationProps } from './types';

export const ErrorNotification: FC<ErrorNotificationProps> = ({
  staticData,
}) => {
  return (
    <div className="pb-[63px] pt-[21px] text-center md:pb-[92px] md:pt-6 xl:py-[157px]">
      <p className="text-xl font-bold md:text-xxl xl:text-xxxl">{staticData}</p>
    </div>
  );
};
