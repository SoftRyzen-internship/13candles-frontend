import { ExternalLinkProps } from '../ui/ExternalLink/types';

export interface ContactListProps {
  contacts: ExternalLinkProps[];
  variant?: 'contacts' | undefined;
  className?: string;
}
