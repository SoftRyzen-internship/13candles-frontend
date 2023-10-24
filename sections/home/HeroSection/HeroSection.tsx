import { BannerSlider } from '@/components/BannerSlider';

export const HeroSection = () => {
  const title = '13 candle bar';

  return (
    <section className="section md:pt-8 xl:pb-[30px] xl:pt-[40px] smOnly:pt-[108px]">
      <div className="container !px-0">
        <h1 className="visually-hidden">{title}</h1>
        <BannerSlider />
      </div>
    </section>
  );
};
