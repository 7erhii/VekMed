import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ua', 'alt'],
 
  // Used when no locale matches
  defaultLocale: 'ua'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ua|en|alt)/:path*']
};