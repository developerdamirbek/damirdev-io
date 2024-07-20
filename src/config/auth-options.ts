import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch('http://localhost:3800/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })
        const data = await res.json()

        if (res.ok && data) {
          return data
        }

        return null
      },
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = { ...(token.user ?? {}) }
        session.user.accessToken = token.accessToken as string
      }

      return session
    },
    async signIn({ account, profile }) {
      if (account?.provider === 'google') {
        return profile?.verified && profile?.email?.endsWith('@example.com')
      }

      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token = { ...token, user: { ...user } }
        token.accessToken = user.accessToken
      }

      return token
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 60 * 60,
  },
  pages: {
    signIn: '/login',
  },
}

export default authOptions
