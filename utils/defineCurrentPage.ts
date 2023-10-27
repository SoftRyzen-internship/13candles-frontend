import { FOR_BUSINESS } from '@/data';

export const defineCurrentPage = (pathname: string) => {
  return pathname.includes(FOR_BUSINESS) ? 'Business' : 'Home';
};
