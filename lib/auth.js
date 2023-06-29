// lib/auth.js
import { useState, useEffect } from 'react';
import { auth } from './firebase';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signOut = () => {
    auth.signOut();
  };

  return { user, signOut };
}

export { auth };
