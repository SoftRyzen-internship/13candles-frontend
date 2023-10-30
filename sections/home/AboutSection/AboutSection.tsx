import Image from 'next/image';
import { AboutProps } from './types';
import { Button } from '@/components/ui/Button';
import { ABOUT, CATALOG } from '@/data';

export const AboutSection: React.FC<AboutProps> = ({ about }) => {
  return (
    <section
      id={ABOUT}
      className="section sm:pb-12 md:pb-9 xl:pb-[118px] xl:pt-[50px]"
    >
      <div className="container">
        <h2 className="section-title-primary mb-4 md:mb-6 xl:mb-7">
          {about.title}
        </h2>
        <div className="gap-8 md:mb-8 md:flex xl:mx-auto xl:mb-12 xl:max-w-5xl xl:gap-[132px] mdOnly:gap-[30px]">
          <div className="flex flex-1 flex-col xl:max-h-[578px] xl:overflow-hidden smOnly:mb-4 mdOnly:align-middle">
            <Image
              src={about.image.src}
              width={462}
              height={578}
              alt={about.image.alt}
            />
          </div>
          <div className="flex-1 text-justify md:m-auto md:leading-[19px] xl:max-w-[424px] xl:text-lg smOnly:mb-8">
            {about.content.map((p, i) => (
              <p
                key={i}
                className="mb-3 last:mb-0 last:tracking-[-0.16px] xl:mb-4"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
        <Button
          className="max-w-[280px] md:max-w-[172px]"
          tag="a"
          label={about.button}
          href={CATALOG}
        />
      </div>
    </section>
  );
};
