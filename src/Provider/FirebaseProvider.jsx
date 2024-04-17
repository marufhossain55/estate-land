import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);

// social auth providers
const GoogleProvider = new GoogleAuthProvider();
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google signIn
  const googleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  // observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const authInfo = { createUser, singInUser, googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default FirebaseProvider;
