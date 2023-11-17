import classNames from 'classnames';
import { ExternalLink } from '../ui/ExternalLink';
import { getCommonDictionaries } from '@/lib/dictionary';
import { ContactListProps } from './types';

export const ContactList: React.FC<ContactListProps> = async ({
  variant = undefined,
  lang,
  className = '',
}) => {
  const contactListClasses = classNames(
    { 'xl:flex-row xl:justify-between': variant === 'contacts' },
    { 'md:items-start': variant !== 'contacts' },
    'flex flex-col items-center gap-2',
    className,
  );

  const {
    common: {
      footer: { contacts },
    },
  } = await getCommonDictionaries(lang);

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
