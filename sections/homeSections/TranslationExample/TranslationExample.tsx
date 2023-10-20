import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { useLocale } from 'next-intl';

export const TranslationExample = () => {
  const t = useTranslations('Home');
  const l = useTranslations('Login');

  const lang = useLocale() === "en" ? "uk" : "en";
  
  return (
    <>
      <main>
        <div className="mb-5 flex gap-4">
          <Link href="/" locale={lang}>
          {t('language')}
          </Link>
        </div>
        <h1>{t('title')}</h1>
        <h2>{l('title')}</h2>
      </main>
    </>
  );
};
