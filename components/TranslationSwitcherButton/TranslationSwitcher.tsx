import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { useLocale } from 'next-intl';

export const TranslationSwitcher = () => {
  const t = useTranslations('header');

  const lang = useLocale() === 'en' ? 'uk' : 'en';

  return (
    <Link href="/" className="link" locale={lang}>
      {t('language')}
    </Link>
  );
};
