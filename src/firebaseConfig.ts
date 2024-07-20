import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDFI6TRGgpNKaliHGu5bgDye-3u7-WCGA',
  authDomain: 'damirdevio.firebaseapp.com',
  projectId: 'damirdevio',
  storageBucket: 'damirdevio.appspot.com',
  messagingSenderId: '391229671711',
  appId: '1:391229671711:web:95ae25e53a7ea6ef94882a',
  measurementId: 'G-V6C3S9SX87',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export { app, auth, db }
