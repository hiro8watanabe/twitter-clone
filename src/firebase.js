import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAfQrEd9KmnIFVfHKGOmXN6sBT6daiwlE8',
  authDomain: 'twitter-clone-c4625.firebaseapp.com',
  projectId: 'twitter-clone-c4625',
  storageBucket: 'twitter-clone-c4625.appspot.com',
  messagingSenderId: '35121052777',
  appId: '1:35121052777:web:a24c4555df8a48b97bb6f8',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
