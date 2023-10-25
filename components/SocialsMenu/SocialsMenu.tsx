import React from 'react';
import { SocialItem, SocialsProps } from './types';

export const SocialsMenu: React.FC<SocialsProps> = ({
  socials,
  title = '',
}) => {
  return (
    <div className="md:font-medium">
      <span className="mx-auto mb-3.5 block text-center font-bold md:mb-3 md:text-left">
        {title}
      </span>
      <ul className="flex flex-col items-center gap-3 md:items-start md:gap-3.5">
        {socials.map(({ href, icon, text, altText }: SocialItem) => (
          <li key={text}>
            <a
              href={href}
              rel="noopener noreferrer nofollow"
              target="_blank"
              className={`decor ${icon}`}
              aria-label={altText}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
