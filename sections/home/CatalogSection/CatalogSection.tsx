import { CategoriesList } from '@/components/CategoriesList';
import { CatalogSectionProps } from './types';
import { CATALOG } from '@/data';

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  title,
  subtitle,
  categories,
}) => (
  <section id={CATALOG} className="section xl:pb-[50px] xl:pt-[15px]">
    <div className="container">
      <h2 className="section-title-primary mb-2">{title}</h2>
      <p className="mb-6 text-md font-medium text-black-light/25">{subtitle}</p>
      <CategoriesList categories={categories} />
    </div>
  </section>
);
