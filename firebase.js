import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestorage } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-clone-hberkaykuran.firebaseapp.com",
  projectId: "twitter-clone-hberkaykuran",
  storageBucket: "twitter-clone-hberkaykuran.appspot.com",
  messagingSenderId: "86458938708",
  appId: "1:86458938708:web:e434e7d3eb60afa1ae44c1",
  measurementId: "G-V4RY6HPDB0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestorage();
const storage = getStorage();

export default app;
export {db,storage};