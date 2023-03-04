
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqR65v-gn50I73kZneod44zOnUGIGDmLo",
  authDomain: "derwa-komentarai.firebaseapp.com",
  projectId: "derwa-komentarai",
  storageBucket: "derwa-komentarai.appspot.com",
  messagingSenderId: "852045470503",
  appId: "1:852045470503:web:15fb2ec3bd1d1c6d4aa702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)