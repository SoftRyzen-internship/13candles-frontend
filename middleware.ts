import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'uk'],
  defaultLocale: 'uk'
});
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};