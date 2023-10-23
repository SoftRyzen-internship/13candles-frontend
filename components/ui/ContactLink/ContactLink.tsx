import classNames from 'classnames';
import { ContactLinkProps } from './types';

export const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  icon,
  text,
  className,
}) => {
  const linkClasses = classNames('decor', icon, className);

  return (
    <a href={href} className={linkClasses}>
      <span className="link font-montserrat">{text}</span>
    </a>
  );
};
