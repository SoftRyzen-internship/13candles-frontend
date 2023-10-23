import { BannerSlider } from '@/components/BannerSlider';

export const HeroSection = () => {
  const title = '13 candle bar';

  return (
    <section className="section !pt-[100px] xl:pb-[30px]">
      <div className="container border border-blue-400 !px-[10px]">
        <h1 className="visually-hidden">{title}</h1>
        <BannerSlider />
      </div>
    </section>
  );
};
