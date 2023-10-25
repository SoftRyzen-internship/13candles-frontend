import Link from 'next/link';
import classNames from 'classnames';
import { BusinessLinkProps } from './types';
import { FOR_BUSINESS } from '@/data';

export const BusinessLink: React.FC<BusinessLinkProps> = ({
  text,
  isIcon = false,
  className = '',
}) => {
  const linkClasses = classNames({ 'decor case': isIcon }, className);

  return (
    <Link href={FOR_BUSINESS} className={linkClasses}>
      <span className="link">{text}</span>
    </Link>
  );
};
