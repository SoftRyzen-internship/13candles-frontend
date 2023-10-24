import Image from 'next/image';
import { AboutProps } from './types';

export const AboutSection: React.FC<AboutProps> = ({ about }) => {
  return (
    <section className="section xl:py-[50px]" id="about">
      <div className="container">
        <h2 className="section-title-primary md:mb-6 smOnly:mb-3">
          {about.title}
        </h2>
        <div className="gap-8 md:mb-8 md:flex xl:mx-auto xl:mb-12 xl:max-w-5xl xl:gap-[132px]">
          <div className="flex flex-1 flex-col smOnly:mb-3">
            <Image
              src="/public/images/homepage/about/about@2x.webp"
              width={500}
              height={500}
              alt={about.image.alt}
              sizes="100vw"
            />
          </div>
          <ul className="flex-1 text-justify leading-[18.78px] xl:text-lg smOnly:mb-6">
            {about.content.map((p, i) => (
              <li key={i} className="mb-3 last:mb-0 last:tracking-[-0.16px]">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <a className="button md:mx-auto md:w-fit" href="./">
          {about.button}
        </a>
      </div>
    </section>
  );
};
