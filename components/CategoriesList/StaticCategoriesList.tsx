import classNames from 'classnames';

import { StaticCategoriesListProps } from './types';
import { StaticCategoryCard } from '../ui/CategoryCard/StaticCategoryCard';

export const StaticCategoriesList: React.FC<StaticCategoriesListProps> = ({
  staticCategories,
  errorText,
  className = '',
}) => {
  const listClasses = classNames('flex flex-wrap gap-4 xl:gap-2', className);

  return (
    <ul className={listClasses}>
      {staticCategories.map(category => (
        <li
          key={category.id}
          className="basis-[calc((100%-16px)/2)] md:basis-[calc((100%-(16px*2))/3)] xl:basis-[calc((100%-(8px*5))/6)]"
        >
          <StaticCategoryCard category={category} errorText={errorText} />
        </li>
      ))}
    </ul>
  );
};
