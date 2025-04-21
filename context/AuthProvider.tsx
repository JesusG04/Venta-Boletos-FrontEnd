"use client"
import { createContext, useEffect, useState } from "react";
import { User, browserLocalPersistence, onAuthStateChanged, setPersistence } from "firebase/auth";
import { auth } from "@/src/firebase/firebaseConfig"

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  loading: true,
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
        loading
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








// function AuthProvide1r({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   const refreshAuth = () => {
//     setUser(auth.currentUser); // Fuerza actualización
//   };


//   useEffect(() => {
//     // 1. Configura persistencia de sesión
//     setPersistence(auth, browserLocalPersistence)
//       .then(() => {
//         // 2. Listener de cambios de autenticación
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//           console.log('Auth state changed:', user?.email); // Para debug
//           setUser(user);
//           setLoading(false);
//         });

//         return unsubscribe;
//       })
//       .catch((error) => {
//         console.error('Error configuring persistence:', error);
//       });
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, loading, refreshAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

