import { Montserrat, Raleway } from 'next/font/google';
import { Locale, i18n } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
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
  const { common, information } = await getDictionary(lang);
  const { footer, header } = common;

  return (
    <html lang={lang}>
      <body
        className={`${montserrat.variable} ${raleway.variable} grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] md:grid-rows-[auto_1fr_auto]`}
      >
        <Header data={header} />
        <main className="">{children}</main>
        <Footer footer={footer} information={information} lang={lang} />
        <div id="modal" />
      </body>
    </html>
  );
}
