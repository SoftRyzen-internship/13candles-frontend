import { FC } from 'react';
import classNames from 'classnames';
import { ErrorNotificationProps } from './types';

export const ErrorNotification: FC<ErrorNotificationProps> = ({
  staticData,
  section,
}) => {
  const notificationStyle = classNames(
    'pb-[63px] pt-[21px] text-center md:pb-[92px] md:pt-6 xl:py-[157px]',
    {
      'md:pb-[52px]': section === 'cart',
    },
  );

  return (
    <div className={notificationStyle}>
      <p className="text-xl font-bold md:text-xxl xl:text-xxxl">{staticData}</p>
    </div>
  );
};
