import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './Firebaseconfig';

// Step 1: Create the AuthContext
const AuthContext = createContext();

// Step 2: Create a custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// Step 3: Create the AuthProvider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logOut() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Step 4: Export the AuthContext
export default AuthContext;
