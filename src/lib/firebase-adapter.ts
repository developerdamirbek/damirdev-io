// lib/adapters/firebase-adapter.ts
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { Adapter } from 'next-auth/adapters'
import { db } from '@/firebaseConfig'
import { AdapterUser } from '@/lib/types'

const mapFirestoreUserToAdapterUser = (userDoc: any): AdapterUser | null => {
  if (!userDoc.exists()) return null
  const data = userDoc.data()

  return {
    id: userDoc.id,
    name: data.name || null,
    email: data.email || '', // Ensure this is a string
    emailVerified: data.emailVerified ? data.emailVerified.toDate() : null,
    image: data.image || null,
  }
}

export function FirebaseAdapter(): Adapter {
  return {
    async getUser(id: string): Promise<AdapterUser | null> {
      const userDoc = await getDoc(doc(db, 'users', id))

      return mapFirestoreUserToAdapterUser(userDoc)
    },
    async getUserByEmail(email: string): Promise<AdapterUser | null> {
      const q = query(collection(db, 'users'), where('email', '==', email))
      const userDocs = await getDocs(q)

      return userDocs.empty ? null : mapFirestoreUserToAdapterUser(userDocs.docs[0])
    },
    async getUserByAccount({ providerAccountId, provider }): Promise<AdapterUser | null> {
      const q = query(
        collection(db, 'accounts'),
        where('providerAccountId', '==', providerAccountId),
        where('provider', '==', provider),
      )
      const accountDocs = await getDocs(q)

      if (accountDocs.empty) return null
      const account = accountDocs.docs[0].data()
      const userDoc = await getDoc(doc(db, 'users', account.userId))

      return mapFirestoreUserToAdapterUser(userDoc)
    },
    async updateUser(user: AdapterUser): Promise<AdapterUser> {
      await setDoc(doc(db, 'users', user.id), user, { merge: true })

      return user
    },
    async deleteUser(userId: string): Promise<void> {
      await setDoc(doc(db, 'users', userId), {}, { merge: false })
    },
    async linkAccount(account): Promise<void> {
      await setDoc(doc(db, 'accounts', `${account.provider}-${account.providerAccountId}`), account)
    },
    async unlinkAccount({ providerAccountId, provider }): Promise<void> {
      await setDoc(doc(db, 'accounts', `${provider}-${providerAccountId}`), {}, { merge: false })
    },
    async createSession({ sessionToken, userId, expires }): Promise<any> {
      await setDoc(doc(db, 'sessions', sessionToken), { sessionToken, userId, expires })

      return { sessionToken, userId, expires }
    },
    async getSessionAndUser(sessionToken: string): Promise<any> {
      const sessionDoc = await getDoc(doc(db, 'sessions', sessionToken))

      if (!sessionDoc.exists()) return null
      const session = sessionDoc.data()
      const userDoc = await getDoc(doc(db, 'users', session.userId))

      return userDoc.exists() ? { session, user: mapFirestoreUserToAdapterUser(userDoc) } : null
    },
    async updateSession({ sessionToken, expires }): Promise<any> {
      await setDoc(doc(db, 'sessions', sessionToken), { sessionToken, expires }, { merge: true })

      return { sessionToken, expires }
    },
    async deleteSession(sessionToken: string): Promise<void> {
      await setDoc(doc(db, 'sessions', sessionToken), {}, { merge: false })
    },
  }
}
