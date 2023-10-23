import React from 'react';
import { SocialContact } from './types';

export const SocialsMenu = () => {

  const socialData = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/13.candle.bar/',
      ariaLabelText: 'посилання на інстаграм',
      className: 'instagram',
    },
    {
      name: 'Telegram',
      link: 'https://www.instagram.com/13.candle.bar/',
      ariaLabelText: 'посилання на телеграм',
      className: 'telegram',
    },
    {
      name: 'Viber',
      link: 'https://www.instagram.com/13.candle.bar/',
      ariaLabelText: 'посилання на вайбер',
      className: 'viber',
    },
  ];

  return (
    <div className="md:font-medium">
      <span className="mx-auto mb-3.5 block text-center font-bold md:mb-3 md:text-left">
        Соціальні мережі
      </span>
      <ul className="flex flex-col items-center gap-3 md:items-start md:gap-3.5">
        {socialData.map(
          ({ link, name, ariaLabelText, className }: SocialContact) => (
            <li key={name}>
              <a
                href={link}
                rel="noopener noreferrer nofollow"
                target="_blank"
                className={className}
                aria-label={ariaLabelText}
              >
                {name}
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
