import { CATALOG } from '@/data';

import { fetchCategories } from '@/api/fetchCategories';

import { CatalogSectionProps } from './types';

import { CategoriesList } from '@/components/CategoriesList';
import { StaticCategoriesList } from '@/components/CategoriesList/StaticCategoriesList';

import { getCommonDictionaries } from '@/lib/dictionary';

export const CatalogSection: React.FC<CatalogSectionProps> = async ({
  isHomePage = false,
  lang,
}) => {
  const categories = await fetchCategories(lang);
  const {
    common: {
      catalog: {
        home_title,
        product_title,
        subtitle,
        categories: staticCategories,
      },
    },
  } = await getCommonDictionaries(lang);

  return (
    <section
      id={CATALOG}
      className={`section md:pt-[76px] xl:pt-[15px] ${
        !isHomePage ? 'pb-[48px] xl:pb-[100px]' : 'xl:pb-[50px]'
      }`}
    >
      <div className="container">
        <h2
          className={`section-title-primary ${
            !isHomePage ? 'mb-6 text-center xl:mb-10' : 'mb-2'
          }`}
        >
          {isHomePage ? home_title : product_title}
        </h2>

        {isHomePage && (
          <p className="mb-6 text-md font-medium text-black-light/25">
            {subtitle}
          </p>
        )}

        {categories && categories.length > 0 ? (
          <CategoriesList categories={categories} lang={lang} />
        ) : (
          <StaticCategoriesList staticCategories={staticCategories} />
        )}
      </div>
    </section>
  );
};
