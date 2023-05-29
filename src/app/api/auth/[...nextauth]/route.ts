import InfojobsProvider from 'infojobs-next-auth-provider'
import NextAuth, { NextAuthOptions } from 'next-auth'
declare module 'next-auth' {
  interface Session {
    accessToken: string
    refreshToken: string
  }
}
export const authOptions: NextAuthOptions = {
  providers: [
    InfojobsProvider({
      clientId: process.env.INFOJOBS_CLIENT_ID ?? '',
      clientSecret: process.env.INFOJOBS_SECRET ?? '',
      redirect_uri: process.env.REDIRECT_URI ?? '',
      infojobs_scopes:
        'CV,CANDIDATE_READ_CURRICULUM_CVTEXT,CANDIDATE_READ_CURRICULUM_EXPERIENCE',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      return session
    },
  },

  debug: false,
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
