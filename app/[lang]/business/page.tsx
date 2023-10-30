import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';
import { UsefulWhomSection } from '@/sections/business/UsefulWhomSection';

import { BusinessFormWithPopUp } from '@/components/BusinessFormWithPopUp';
// import { BusinessForm } from '@/components/BusinessForm';

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  const { secondSection, helpfulSection, usefulWhom } = businessPage;

  const dataString = JSON.stringify(businessPage.form);
  const staticFormData = JSON.parse(dataString);

  return (
    <main>
      {/* <BusinessForm
           staticData={staticData}
        section="hero"
      /> */}

      <SecondSection {...secondSection} />
      <HelpfulSection {...helpfulSection} />
      <UsefulWhomSection {...usefulWhom} />

      <BusinessFormWithPopUp staticData={staticFormData} />
    </main>
  );
}
