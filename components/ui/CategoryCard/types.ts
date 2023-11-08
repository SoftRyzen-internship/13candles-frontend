import { CategorySlug } from '@/components/CategoriesList/types';
import { Locale } from '@/i18n.config';

export interface CategoryCardProps {
  category: CategoryStaticDataInfo;
  dynamicSlug?: CategorySlug;
  isStatic?: boolean;
  lang?: Locale;
  className?: string;
}

type CategoryStaticDataInfo = {
  id: string;
  attributes: {
    title: string;
    sequence_number: number;
    image: {
      image_description: string;
      photo: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
};
