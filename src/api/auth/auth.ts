import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebaseConfig'

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    return user
  } catch (error) {
    console.error('Error signing in with Google:', error)
    throw error
  }
}

export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)

    return { success: true }
  } catch (error) {
    console.error('Error sending password reset email:', error)
    throw error
  }
}
