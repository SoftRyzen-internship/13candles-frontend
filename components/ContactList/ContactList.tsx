import classNames from 'classnames';

import { ExternalLink } from '../ui/ExternalLink';

import { ContactListProps } from './types';

export const ContactList: React.FC<ContactListProps> = ({
  contacts = [],
  variant = undefined,
  className = '',
}) => {
  const contactListClasses = classNames(
    { 'xl:flex-row xl:justify-between': variant === 'contacts' },
    { 'md:items-start': variant !== 'contacts' },
    'flex flex-col items-center gap-2',
    className,
  );

  return (
    <ul className={contactListClasses}>
      {contacts.map(contact => (
        <li key={contact.href}>
          <ExternalLink className="h-[24px]" {...contact} />
        </li>
      ))}
    </ul>
  );
};
