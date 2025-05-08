import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-UPlFeLD4kABUbvHWNFMpA_IenZA98CY",
  authDomain: "reactchatapp-b5a3c.firebaseapp.com",
  projectId: "reactchatapp-b5a3c",
  storageBucket: "reactchatapp-b5a3c.appspot.com",
  messagingSenderId: "402885719981",
  appId: "1:402885719981:web:1fa62de6e1527579db1324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth, provider, and firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); // <<== Add this line
export const db = getFirestore(app);
