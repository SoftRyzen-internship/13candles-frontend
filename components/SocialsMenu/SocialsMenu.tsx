import classNames from 'classnames';
import { ExternalLink } from '../ui/ExternalLink';
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
        {socials.map(social => (
          <li key={social.text}>
            <ExternalLink className="h-[24px]" {...social} />
          </li>
        ))}
      </ul>
    </div>
  );
};
