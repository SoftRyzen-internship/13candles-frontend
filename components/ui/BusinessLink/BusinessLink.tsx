'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { BusinessLinkProps } from './types';
import { FOR_BUSINESS } from '@/data';
import { useParams } from 'next/navigation';

export const BusinessLink: React.FC<BusinessLinkProps> = ({
  text,
  isIcon = false,
  onClick,
  className = '',
}) => {
  const linkClasses = classNames({ 'decor case': isIcon }, className);

  const params = useParams();
  return (
    <Link
      href={`${params.lang}/${FOR_BUSINESS}`}
      className={linkClasses}
      onClick={onClick}
    >
      <span className="link">{text}</span>
    </Link>
  );
};
