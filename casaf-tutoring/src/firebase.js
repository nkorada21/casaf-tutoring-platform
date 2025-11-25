import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvLW2ec5EigztuYyBu9FDo6Jas1xp186g",
  authDomain: "casaf-tutoring.firebaseapp.com",
  projectId: "casaf-tutoring",
  storageBucket: "casaf-tutoring.firebasestorage.app",
  messagingSenderId: "501363874892",
  appId: "1:501363874892:web:335ce71574b250370868e9",
  measurementId: "G-1JVK01FZZK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth } from "firebase/auth";

export const auth = getAuth(app);
export const db = getFirestore(app);