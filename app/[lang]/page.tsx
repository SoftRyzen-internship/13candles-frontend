// import { ExampleSection } from '@/sections/home/ExampleSection';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import TranslationSwitcher from '@/components/TranslationSwitcher/TranslationSwitcher';
import { ExampleSection } from '@/sections/home/ExampleSection';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { about } = await getDictionary(lang);

  return (
    <main>
      <ExampleSection />
      <h1>{about.title}</h1>
      <TranslationSwitcher />
    </main>
  );
}
