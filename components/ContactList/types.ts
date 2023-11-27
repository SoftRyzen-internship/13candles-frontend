export interface ContactListProps {
  contacts: {
    href: string;
    icon: string;
    text: string;
  }[];
  variant?: 'contacts' | undefined;
  className?: string;
}
