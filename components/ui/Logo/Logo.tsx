import classNames from 'classnames';

import Logosvg from '@/public/icons/icon_logo.svg';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({
  position = 'header',
  className,
}) => {
  const logoSvgStyles = classNames('h-[48px] w-[87px]', {
    'xl:w-[116px] xl:h-[64px]': position === 'header',
    'md:w-[116px] md:h-[64px]': position === 'footer',
  });
  return (
    <a
      href="/"
      className={`common-transition block max-w-max text-black-light hover:text-black focus:text-black ${className}`}
    >
      <Logosvg width={116} height={64} className={logoSvgStyles} />
    </a>
  );
};
