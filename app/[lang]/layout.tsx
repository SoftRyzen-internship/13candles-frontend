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
  const { metadata, twitter, openGraph } = meta;
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
    icons: {
      icon: [
        {
          url: '/meta/favicon.ico',
        },
        {
          url: '/meta/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/meta/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      shortcut: '/meta/favicon.ico',
      apple: '/meta/apple-touch-icon.png',
      other: {
        rel: '/meta/apple-touch-icon.png',
        url: '/meta/apple-touch-icon.png',
      },
    },
  };
}

// "openGraph": {
// "images": [
//   {
//     "url": "/images/ogp-image.jpg",
//     "width": 1200,
//     "height": 630,
//     "alt": "Varicose Vein Treatment in Kyiv | Vascular Surgeon - Sergii Voitsitskyi"
//   }
// ],
//   "description": "Consultation with a phlebologist. Effective varicose vein treatment, modern equipment, comfortable conditions. Affordable price. Treatment for thrombosis.",
//   "type": "website",
//   "locale": "en_US",
//   "title": "Varicose Vein Treatment in Kyiv | Vascular Surgeon - Sergii Voitsitskyi",
//   "url": "https://phlebologist.vercel.app/en"
// }

// openGraph: {
//   title: title,
//   description: description,
//   url: BASE_URL as string,
//   siteName: title,
//   locale: locale,
//   type: 'website',
//   images: images,
// },

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
