import { CATALOG } from '@/data';

import { fetchCategories } from '@/api/fetchCategories';

import { CatalogSectionProps } from './types';

import { CategoriesList } from '@/components/CategoriesList';
import { StaticCategoriesList } from '@/components/CategoriesList/StaticCategoriesList';

import { getCommonDictionaries } from '@/lib/dictionary';

export const CatalogSection: React.FC<CatalogSectionProps> = async ({
  className = '',
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
        serviceError,
      },
    },
  } = await getCommonDictionaries(lang);

  return (
    <section
      id={CATALOG}
      className={`section  ${
        !isHomePage
          ? 'pb-[48px] pt-0 xl:pb-[100px]'
          : 'md:pt-[76px] xl:pb-[50px] xl:pt-[15px]'
      } ${className}`}
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
          <StaticCategoriesList
            staticCategories={staticCategories}
            errorText={serviceError}
          />
        )}
      </div>
    </section>
  );
};
