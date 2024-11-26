import type { NextAuthConfig } from 'next-auth';

// authConfig object
export const authConfig = {
  pages: {
    signIn: '/login', // NextAuth will direct user to /login instead of NextAuth default page
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // auth propery contains users session
      // request property contains incoming request
      const isLoggedIn = !!auth?.user;

      // check all dashboard routes
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  // providers options lists login options
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;