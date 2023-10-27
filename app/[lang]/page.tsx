import type { Metadata } from 'next';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
// import { TranslationSwitcher } from '@/components/TranslationSwitcher';
import { HeroSection } from '@/sections/home/HeroSection';
import { CatalogSection } from '@/sections/home/CatalogSection';
import { AboutSection } from '@/sections/home/AboutSection';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { meta, metadataHome } = await getMetadata(lang);

  const { twitter, openGraph, icons, languages, manifest } = meta;
  const { title, description, keywords } = metadataHome;

  //TODO: delete localhost:3000 / create .env.local
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000/';

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${lang}`,
      languages,
    },
    keywords,
    manifest,
    twitter,
    openGraph: { ...openGraph, url: `${baseUrl}${lang}` },
    icons,
  };
}

// export default function manifest(): MetadataRoute.Manifest {
//   return {
//     name: 'Next.js App',
//     short_name: 'Next.js App',
//     description: 'Next.js App',
//     start_url: '/',
//     display: 'standalone',
//     background_color: '#fff',
//     theme_color: '#fff',
//     icons: [
//       {
//         src: '/favicon.ico',
//         sizes: 'any',
//         type: 'image/x-icon',
//       },
//     ],
//   };
// }

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { homepage } = await getDictionary(lang);

  // const { language } = header;
  const { hero, catalog, about } = homepage;

  return (
    <main>
      {/* <TranslationSwitcher lang={language} />
      <BusinessLink isIcon={true} text={header.forBusinesBtnText} /> */}
      <HeroSection {...hero} />
      <CatalogSection {...catalog} />
      <AboutSection about={about} />
    </main>
  );
}
