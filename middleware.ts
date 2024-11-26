import NextAuth from 'next-auth';
// import authConfig object into middleware
import { authConfig } from './auth.config';

// Initialize NextAuth with the authConfig object
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher allows you to filter middleware to run on specific paths
  /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - .png files
     */
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};