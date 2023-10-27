import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from '@/i18n.config';

import { match as matchLocale } from '@formatjs/intl-localematcher';

function getLocale() {
  // const negotiatorHeaders: Record<string, string> = {};
  // request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  const locale = matchLocale(locales, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale();
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // Configuration for the URL matcher, which ignores specific paths like
  // `/_next/`, `/api/`, `public/images`, `public/icons`, `public/meta`, and `favicon.ico`.

  // This configuration is crucial for static data and images rendering.

  // For example, if this configuration does not work properly, a URL like "http://localhost:3000/icons/icon_businesscase.svg"
  // would include the locale(e.g., "uk" or "en") and become "http://localhost:3000/uk/icons/icon_businesscase.svg,"
  // making it inaccessible and preventing icon rendering.

  matcher: [
    '/((?!api|_next/static|_next/image|public|images|icons|meta|favicon.ico).*)',
  ],
};
