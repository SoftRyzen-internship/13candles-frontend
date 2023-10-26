import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

// import { ContactList } from '@/components/ContactList';
// import { BusinessLink } from '@/components/ui/BusinessLink';

// import { CatalogSection } from '@/sections/home/CatalogSection';

// import { SocialsMenu } from '@/components/SocialsMenu';
// import { TranslationSwitcher } from '@/components/TranslationSwitcher';
// import { HeroSection } from '@/sections/home/HeroSection';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  console.log(businessPage);
  return (
    <main>
      <div className="container mt-10 flex flex-col gap-10"></div>
    </main>
  );
}
