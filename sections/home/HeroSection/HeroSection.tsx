import { BannerSlider } from '@/components/BannerSlider';
import { HeroSectionProps } from './types';
import { fetchBanners } from '@/api/fetchBanners';

export const HeroSection: React.FC<HeroSectionProps> = async ({
  hero: { hiddenTitle, banners: staticBanners },
  lang,
}) => {
  const banners = await fetchBanners(lang);

  return (
    <section className="section pb-0 md:pt-0 xl:pb-[35px] smOnly:pt-0">
      <div className="container !px-0">
        <h1 className="visually-hidden">{hiddenTitle}</h1>

        {banners && banners.length > 0 ? (
          <BannerSlider banners={banners} />
        ) : (
          <BannerSlider banners={staticBanners} />
        )}
      </div>
    </section>
  );
};
