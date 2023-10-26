import React from 'react';

import classNames from 'classnames';

import { SocialsProps } from './types';

export const SocialsMenu: React.FC<SocialsProps> = ({
  socials,
  title = '',
  className = '',
}) => {
  const socialMenuStyles = classNames(
    'flex flex-col items-center gap-2 md:items-start md:gap-3',
    className,
  );
  return (
    <div className="md:font-medium">
      <span className="mx-auto mb-3.5 block text-center font-bold md:mb-3 md:text-left">
        {title}
      </span>
      <ul className={socialMenuStyles}>
        {socials.map(({ href, icon, text }) => (
          <li key={text}>
            <a
              href={href}
              rel="noopener noreferrer nofollow"
              target="_blank"
              className={`decor flex h-[24px] items-center ${icon}`}
            >
              <span className="link ">{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
