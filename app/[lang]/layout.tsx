import { Metadata } from 'next';
import { Montserrat, Raleway } from 'next/font/google';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import { fetchInfo } from '@/api/fetchInfo';

import { Locale, i18n } from '@/i18n.config';

import '../globals.css';

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

export const dynamicParams = false;
export const dynamic = 'error';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { meta, metadataHome } = await getMetadata(lang);

  const { twitter, openGraph, icons, languages, manifest } = meta;
  const { title, description, keywords } = metadataHome;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    manifest,
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages,
    },
    keywords,
    twitter,
    openGraph: { ...openGraph, url: `${baseUrl}/${lang}` },
    icons,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const {
    common,
    information,
    businessPage: { form },
  } = await getDictionary(lang);

  const dynamicInfo = await fetchInfo(lang);

  const { footer, header, orderModal } = common;

  return (
    <html lang={lang}>
      <body
        className={`${montserrat.variable} ${raleway.variable} grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] md:grid-rows-[auto_1fr_auto] smOnly:pt-[119px]`}
      >
        <Header data={header} dataOrder={orderModal} form={form} />
        <main>{children}</main>
        <Footer
          footer={footer}
          dataOrder={orderModal}
          information={information}
          dynamicInfo={dynamicInfo}
          form={form}
        />
        <div id="modal" />
      </body>
    </html>
  );
}
