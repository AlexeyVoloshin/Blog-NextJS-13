import { users } from '@/data/users';

import { ROUTES } from '@/routes';

import GoggleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

import type { AuthOptions, User } from 'next-auth';

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true},
        password: { label: 'password', type: 'password', required: true},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const currentUser = users.find(user => user.email === credentials.email);

        if (currentUser && currentUser.password === credentials.password) {
          const {password, ...userWithoutPass} = currentUser;
          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: ROUTES.static.signin,
  },
};