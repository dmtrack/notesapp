import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyA0wGfhwvtpvHZWyqWzJAtPDbLyVxaUJSA",
  authDomain: "notesapp-11bc2.firebaseapp.com",
  databaseURL:
    "https://notesapp-11bc2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notesapp-11bc2",
  storageBucket: "notesapp-11bc2.appspot.com",
  messagingSenderId: "252310226402",
  appId: "1:252310226402:web:2e7998f4c4ec8e4cf3e5bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
