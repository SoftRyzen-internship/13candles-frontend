import classNames from 'classnames';
import { ExternalLink } from '../ui/ExternalLink';
import { SocialsProps } from './types';

export const SocialsMenu: React.FC<SocialsProps> = ({
  socials,
  title = '',
  variant = undefined,
  className = '',
}) => {
  const socialMenuStyles = classNames(
    { 'xl:flex-row xl:gap-16': variant === 'contacts' },
    { 'md:items-start': variant !== 'contacts' },
    'flex flex-col items-center gap-2 md:gap-3',
    className,
  );

  const titleStyles = classNames(
    { 'xl:text-xl xl:text-left xl:mb-6': variant === 'contacts' },
    { 'md:text-left': variant !== 'contacts' },
    'mx-auto mb-3.5 block text-center font-bold md:mb-3',
  );

  return (
    <div className="md:font-medium">
      <span className={titleStyles}>{title}</span>
      <ul className={socialMenuStyles}>
        {socials.map(social => (
          <li key={social.text}>
            <ExternalLink className="h-[24px] font-medium" {...social} />
          </li>
        ))}
      </ul>
    </div>
  );
};
