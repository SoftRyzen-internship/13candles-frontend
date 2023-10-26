import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  console.log(businessPage);

  return <main></main>;
}
