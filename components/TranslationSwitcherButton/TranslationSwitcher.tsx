import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { useLocale } from 'next-intl';

export const TranslationSwitcher = () => {
  const t = useTranslations('Home');
  const l = useTranslations('Login');

  const lang = useLocale() === 'en' ? 'uk' : 'en';

  return (
    <>
      <Link href="/" className="link" locale={lang}>
        {t('language')}
      </Link>

      {/* TODO: Delete after review */}
      <div className="mt-3">
        <span>{t('title')}</span>
        <br />
        <span>{l('title')}</span>
      </div>
    </>
  );
};
