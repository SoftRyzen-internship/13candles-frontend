import classNames from 'classnames';
import { ExternalLinkProps } from './types';

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  icon,
  text,
  className = '',
}) => {
  const linkClasses = classNames('decor', icon, className);

  return (
    <a
      className={linkClasses}
      href={href}
      rel="noopener noreferrer nofollow"
      target="_blank"
    >
      <span className="link">{text}</span>
    </a>
  );
};
