import { i18n } from '@/i18n.config';

export const checkPageName = (path: string, route: string) => {
  let isCorrectPage = false;

  [...i18n.locales].map(locale => {
    const variant1 = `${route}${locale}`;
    const variant2 = `/${locale}${route}`;

    if (path === variant1 || path === variant2) isCorrectPage = true;
  });

  return isCorrectPage;
};
