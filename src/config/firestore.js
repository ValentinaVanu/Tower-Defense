import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBTSnk4DYeBrr_OyFpMyQnnFEcAmJOqH0g",
  authDomain: "tower-defense-b9064.firebaseapp.com",
  projectId: "tower-defense-b9064",
  storageBucket: "tower-defense-b9064.appspot.com",
  messagingSenderId: "858893818952",
  appId: "1:858893818952:web:d17d20471395c0641bcc7d",
  measurementId: "G-XWNHPFX4ZC",
};

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
// export const storage = firebase.storage()
export const ts = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
// export const GitHubProvider = new firebase.auth.GithubAuthProvider()
