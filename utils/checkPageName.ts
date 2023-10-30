import { i18n } from '@/i18n.config';

export const checkPageName = (path: string, route: string) => {
  let isCorrectPage = false;

  [...i18n.locales].map(locale => {
    if (path === `${route}${locale}`) isCorrectPage = true;
    if (path === `/${locale}${route}`) isCorrectPage = true;
  });

  return isCorrectPage;
};
