'use client';

import { useParams } from 'next/navigation';
import classNames from 'classnames';
import { Locale } from '@/i18n.config';

import Logosvg from '@/public/icons/icon_logo.svg';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({
  position = 'header',
  aria = '',
  className = '',
}) => {
  const lang = useParams().lang as Locale;
  const logoSvgStyles = classNames('h-[48px] w-[87px]', {
    'xl:w-[116px] xl:h-[64px]': position === 'header',
    'md:w-[116px] md:h-[64px]': position === 'footer' || 'contacts',
  });
  return (
    <a
      href={`/${lang}`}
      aria-label={aria}
      className={`common-transition block max-w-max text-black-light hover:text-black focus:text-black ${className}`}
    >
      <Logosvg width={116} height={64} className={logoSvgStyles} />
    </a>
  );
};
