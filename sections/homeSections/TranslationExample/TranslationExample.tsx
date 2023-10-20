import { useTranslations } from 'next-intl';
 import Link from 'next-intl/link';

export const TranslationExample = () => {
      const t = useTranslations('Home');
  const l = useTranslations('Login');

  return (
    <>
      <main>

        <div className='mb-5 flex gap-4'>
          <Link href="/" locale='en'>In English</Link>
          <Link href="/" locale='uk'>Українською</Link>
        </div>
        <h1>{t('title')}</h1>
        <h2>{l('title')}</h2>
      </main>
    </>
  );
}
