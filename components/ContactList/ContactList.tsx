import classNames from 'classnames';
import { ExternalLink } from '../ui/ExternalLink';
import { ContactListProps } from './types';

export const ContactList: React.FC<ContactListProps> = ({
  contacts,
  className = '',
}) => {
  const contactListClasses = classNames(
    'flex flex-col gap-3 smOnly:items-center ',
    className,
  );

  return (
    <ul className={contactListClasses}>
      {contacts.map(contact => (
        <li key={contact.href}>
          <ExternalLink {...contact} />
        </li>
      ))}
    </ul>
  );
};
