import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { ExampleSection } from '@/sections/home/ExampleSection';
import { TranslationSwitcher } from '@/components/TranslationSwitcher';
import { AboutSection } from '@/sections/home/AboutSection';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const allData = await getDictionary(lang);

  return (
    <main>
      <ExampleSection />
      {/* <TranslationSwitcher lang={header.language} /> */}
      <AboutSection about={allData.about} />
    </main>
  );
}