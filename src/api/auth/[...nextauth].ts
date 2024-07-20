import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { auth } from '@/firebaseConfig'

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        action: { label: 'Action', type: 'hidden' }, // Optional
      },
      async authorize(credentials: Credentials): Promise<any> {
        if (!credentials) {
          return null
        }

        try {
          if (credentials.action === 'register') {
            // Handle registration
            const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)

            return userCredential.user
          } else {
            // Handle login
            const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)

            return userCredential.user
          }
        } catch (error) {
          console.error('Error:', error)

          return null
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.email = token.email as string
      }

      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
