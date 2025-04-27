"use client"
import { createContext, useEffect, useState } from "react";
import { User, browserLocalPersistence, onAuthStateChanged, setPersistence } from "firebase/auth";
import { auth } from "@/src/firebase/firebaseConfig"

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  loading: true,
  setLoading: () => {},
});


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Establecer persistencia local
    setPersistence(auth, browserLocalPersistence).then(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

      // Limpiar listener al desmontar
      return () => unsubscribe();
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
          {children}
    </AuthContext.Provider>
  )
}
export {
  AuthProvider
}
export default AuthContext

