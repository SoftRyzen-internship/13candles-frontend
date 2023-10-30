import { BannerProps } from '@/components/ui/Banner/types';

export interface HeroSectionProps {
  hero: {
    hiddenTitle: string;
    banners: BannerProps[];
  };
}
