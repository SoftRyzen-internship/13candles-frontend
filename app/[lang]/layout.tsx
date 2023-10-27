import type { Metadata } from 'next';
import { Montserrat, Raleway } from 'next/font/google';
import { Locale, i18n } from '@/i18n.config';

import '../globals.css';
import { getDictionary } from '@/lib/dictionary';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const {
    common: { meta },
  } = await getDictionary(lang);

  const { metadata, twitter, openGraph, icons } = meta;
  const { title, description, keywords, manifest } = metadata;

  return {
    title,
    description,
    metadataBase: new URL(process.env.BASE_URL as string),
    alternates: {
      canonical: `${process.env.BASE_URL}${lang}`,
      languages: {
        'uk-UA': '/uk',
        'en-US': '/en',
      },
    },
    keywords,
    manifest,
    twitter,
    openGraph: { ...openGraph, url: `${process.env.BASE_URL}${lang}` },
    icons,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${montserrat.variable} ${raleway.variable}`}>
        {children}
        <div id="modal" />
      </body>
    </html>
  );
}
