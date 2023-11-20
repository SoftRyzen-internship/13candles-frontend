import { Locale } from '@/i18n.config';
import { CategoriesData } from '@/types/Categories';
import { ProductsData } from '@/types/Products';

export interface ProductsSectionProps {
  lang: Locale;
  category: string;
  categories: CategoriesData;
  products: ProductsData;
  staticData: {
    dropdown: {
      label: string;
    };
    loadMoreBtn: string;
    noContentText: {
      subtitle: string;
      tip: string;
    };
  };
}
