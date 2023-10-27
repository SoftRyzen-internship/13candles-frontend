import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';

import { BusinessFormWithPopUp } from '@/components/BusinessFormWithPopUp';
// import { BusinessForm } from '@/components/BusinessForm';

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  const { secondSection, helpfulSection } = businessPage;

  const dataString = JSON.stringify(businessPage.form);
  const staticFormData = JSON.parse(dataString);

  return (
    <main>
      {/* <BusinessForm
           staticData={staticData}
        section="hero"
      /> */}
      <SecondSection className="section xl:py-[50px]" {...secondSection} />
      <HelpfulSection className="section xl:py-[50px]" {...helpfulSection} />
      <BusinessFormWithPopUp staticData={staticFormData} />
    </main>
  );
}
