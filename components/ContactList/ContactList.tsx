import classNames from 'classnames';
import { ContactLink } from '../ui/ContactLink';
import { ContactListProps } from '@/types';

const links = [
  {
    href: 'tel:380634293499',
    icon: 'phone',
    text: '38 (063) 429 34 99',
  },
  {
    href: 'mailto:13candlebar@gmail.com',
    icon: 'email',
    text: '13candlebar@gmail.com',
  },
];

export const ContactList: React.FC<ContactListProps> = ({ className }) => {
  const contactListClasses = classNames(
    'flex flex-col gap-3 smOnly:items-center ',
    className,
  );

  return (
    <ul className={contactListClasses}>
      {links.map(link => (
        <li key={link.href}>
          <ContactLink {...link} />
        </li>
      ))}
    </ul>
  );
};
