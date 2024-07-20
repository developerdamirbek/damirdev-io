import { Firestore } from '@google-cloud/firestore'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import { cert, getApps, initializeApp } from 'firebase-admin/app'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const firestorePrivateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: firestorePrivateKey,
    }),
  })
}

const firestore = new Firestore()

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: FirebaseAdapter(firestore),
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    signIn: '/auth/signin',
  },
})
