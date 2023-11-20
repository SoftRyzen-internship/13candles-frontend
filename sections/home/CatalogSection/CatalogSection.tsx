import { CategoriesList } from '@/components/CategoriesList';
import { CATALOG } from '@/data';

import { fetchCategories } from '@/api/fetchCategories';

import { CatalogSectionProps } from './types';
import { StaticCategoriesList } from '@/components/CategoriesList/StaticCategoriesList';

export const CatalogSection: React.FC<CatalogSectionProps> = async ({
  catalog: { title, subtitle, categories: staticCategories },
  hideSubtitle,
  lang,
}) => {
  const categories = await fetchCategories(lang);

  return (
    <section
      id={CATALOG}
      className={`section md:pt-[76px] xl:pt-[15px] ${
        hideSubtitle ? 'pb-[48px] xl:pb-[100px]' : 'xl:pb-[50px]'
      }`}
    >
      <div className="container">
        <h2
          className={`section-title-primary ${
            hideSubtitle ? 'mb-6 text-center xl:mb-10' : 'mb-2'
          }`}
        >
          {title}
        </h2>

        {!hideSubtitle && (
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
