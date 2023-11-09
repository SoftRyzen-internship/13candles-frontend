import { CategoriesList } from '@/components/CategoriesList';
import { CATALOG } from '@/data';

import { fetchCategories } from '@/api/api/fetchCategories';

import { CatalogSectionProps } from './types';
import { StaticCategoriesList } from '@/components/CategoriesList/StaticCategoriesList';

export const CatalogSection: React.FC<CatalogSectionProps> = async ({
  catalog: { title, subtitle, categories: staticCategories },
  lang,
}) => {
  const categories = await fetchCategories(lang);

  console.log(categories && categories.length > 0);

  return (
    <section id={CATALOG} className="section xl:pb-[50px] xl:pt-[15px]">
      <div className="container">
        <h2 className="section-title-primary mb-2">{title}</h2>

        <p className="mb-6 text-md font-medium text-black-light/25">
          {subtitle}
        </p>

        {categories && categories.length > 0 ? (
          <CategoriesList categories={categories} lang={lang} />
        ) : (
          <StaticCategoriesList staticCategories={staticCategories} />
        )}
      </div>
    </section>
  );
};
