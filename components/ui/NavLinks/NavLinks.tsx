'use client';

import { smoothScroll } from '@/utils';
import { NavLinksProps } from './types';

export const NavLinks: React.FC<NavLinksProps> = ({
  links = [],
  onClick,
  className = '',
}) => {
  return (
    <ul className={`grid gap-4 md:flex  smOnly:text-lg ${className}`}>
      {links.map(({ name, href }, idx) => (
        <li key={idx}>
          <a
            href={href}
            className="link"
            onClick={e => {
              if (onClick) onClick();
              smoothScroll(e, href);
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
