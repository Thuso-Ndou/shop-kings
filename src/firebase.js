// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQBzBzkH6jnD5IGfjLUK9bbFJXXAliVWI",
    authDomain: "shop-kings.firebaseapp.com",
    projectId: "shop-kings",
    storageBucket: "shop-kings.appspot.com",
    messagingSenderId: "491549116989",
    appId: "1:491549116989:web:2f1513a2ae2ff701f8f854",
    measurementId: "G-3KGW9YJN3C"
  };

// initialize firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, doc, setDoc, collection, query, orderBy, onSnapshot };