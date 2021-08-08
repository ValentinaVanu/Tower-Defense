import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import 'firebase/app'

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSI,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MID,
};

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const ts = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const GitHubProvider = new firebase.auth.GithubAuthProvider()

// export const GitHubProvider = new firebase.auth.GithubAuthProvider()
