import Image from 'next/image';

import { BtnWithBusinessFormModal } from '@/components/BtnWithBusinessFormModal';
import { HeroProps } from './types';

export const HeroSection: React.FC<HeroProps> = ({
  image,
  overtitle,
  title,
  services,
  button,
  form,
}) => {
  return (
    <section className="pb-[16px] text-base md:pb-[18px] xl:pb-[50px] ">
      <div className="container flex flex-col gap-[24px] md:flex-row md:gap-[20px] xl:gap-[64px]">
        <div className="w-full shrink-0 md:w-[334px] xl:w-[572px]">
          <Image
            src={image.src}
            alt={image.alt}
            width={572}
            height={578}
            priority
            sizes="(max-width: 767px) 440px, (max-width: 1279px) 334px, 578px"
            className="aspect-square object-cover object-center md:aspect-[1/1.01]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-left smOnly:mx-auto smOnly:max-w-[280px]">
            {overtitle}
          </p>
          <h1 className="section-title-secondary mt-[8px] text-center md:text-left xl:mt-[24px] smOnly:mx-auto smOnly:max-w-[420px]">
            {title}
          </h1>

          <ul className="mt-[16px] flex flex-col gap-[8px] xl:mt-[48px] xl:gap-[16px]">
            {services &&
              services.map(item => (
                <li
                  key={item.id}
                  className="biz-item relative pl-[12px] xl:pl-[24px] xl:text-lg"
                >
                  {item.text}
                </li>
              ))}
          </ul>

          <BtnWithBusinessFormModal
            staticData={form}
            label={button.toUpperCase()}
          />
        </div>
      </div>
    </section>
  );
};
