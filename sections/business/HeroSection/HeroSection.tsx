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
    <section className="pb-[16px] pt-[32px] text-base md:pb-[18px] md:pt-[36px] xl:pb-[50px] xl:pt-[40px] smOnly:mt-[84px]">
      <div className="container">
        <div className="xl: flex flex-col gap-[24px] md:flex-row md:gap-[20px] xl:gap-[64px]">
          <Image
            src={image.src}
            alt={image.alt}
            width={572}
            height={578}
            priority
            className="aspect-[1/1] w-full object-cover object-center md:aspect-[1/1.01] md:w-[334px] xl:w-[572px]"
          />

          <div className="md:py-[28px] xl:py-[108px]">
            <p className="text-center md:text-left">{overtitle}</p>
            <h1 className="section-title-secondary mt-[8px] text-center md:text-left xl:mt-[24px]">
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
      </div>
    </section>
  );
};
