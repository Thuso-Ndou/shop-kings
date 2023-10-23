// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCYl3UqH65PjTFAXGiyIsSniOwBysiBp_A",
  authDomain: "shopkings-store.firebaseapp.com",
  projectId: "shopkings-store",
  storageBucket: "shopkings-store.appspot.com",
  messagingSenderId: "475482846330",
  appId: "1:475482846330:web:026165b37b1428239737c3",
  measurementId: "G-D9EJN9D4XL"
};

// initialize firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, doc, setDoc, collection, query, orderBy, onSnapshot };