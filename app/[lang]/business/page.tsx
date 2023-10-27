import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { BusinessForm } from '@/components/BusinessForm';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);

  const dataString = JSON.stringify(businessPage.form);
  const staticData = JSON.parse(dataString);

  return (
    <main>
      <BusinessForm staticData={staticData} section="hero" />
      <BusinessForm staticData={staticData} section="contacts" />
    </main>
  );
}
