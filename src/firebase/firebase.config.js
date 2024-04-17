import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyBLK8YjAy9IBxPVG_htjW9znbX1QkPndLQ',
  authDomain: 'estate-land-auth.firebaseapp.com',
  projectId: 'estate-land-auth',
  storageBucket: 'estate-land-auth.appspot.com',
  messagingSenderId: '1075341101715',
  appId: '1:1075341101715:web:3b70da33402a11551f5b66',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
