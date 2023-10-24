import Link from 'next/link';
import classNames from 'classnames';
import { BusinessLinkProps } from './types';

const businessLink = {
  href: '/business',
  text: 'Для Бізнесу',
};

export const BusinessLink: React.FC<BusinessLinkProps> = ({ className }) => {
  const { href, text } = businessLink;
  const linkClasses = classNames('decor case', className);

  return (
    <Link href={href} className={linkClasses}>
      <span className="link">{text}</span>
    </Link>
  );
};
