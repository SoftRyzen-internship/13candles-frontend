import { ServiceErrorNotificationProps } from './types';

export const ServiceErrorNotification: React.FC<
  ServiceErrorNotificationProps
> = ({ text: { subtitle, tip } }) => {
  return (
    <div className="mx-auto pb-[42px] text-center md:pb-[70px] xl:py-[131px] smOnly:max-w-[400px]">
      <p className="title-lg mb-6 smOnly:text-xl">{subtitle}</p>
      <p className="text-lg font-medium xl:text-xl">{tip}</p>
    </div>
  );
};
