import classNames from 'classnames';
import { ExternalLink } from '../ui/ExternalLink';
import { ContactListProps } from './types';

export const ContactList: React.FC<ContactListProps> = ({
  contacts,
  className = '',
}) => {
  const contactListClasses = classNames(
    'flex flex-col items-center gap-2 md:items-start',
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
