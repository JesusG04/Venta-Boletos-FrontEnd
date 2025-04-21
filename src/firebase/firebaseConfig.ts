import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator,updateProfile } from "firebase/auth";  // Si necesitas autenticación
import { getStorage, connectStorageEmulator, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";  // Importa Storage


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_ELECTRO_CULTURE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_ELECTRO_CULTURE_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_ELECTRO_CULTURE_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_ELECTRO_CULTURE_PROYECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_ELECTRO_CULTURE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_ELECTRO_CULTURE_MESSAGINGSENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_ELECTRO_CULTURE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_ELECTRO_CULTURE_MEASUREMENT_ID
}

const app: FirebaseApp = initializeApp(firebaseConfig);

// Acceder al servicio de autenticación de Firebase
const auth = getAuth(app);
const storage = getStorage(app);


// Conexión a emuladores (solo en desarrollo)
if (process.env.NEXT_PUBLIC_FIREBASE_ELECTRO_CULTURE_ENV === 'development') {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectStorageEmulator(storage, "localhost", 9199);
  console.log("✅ Firebase emulators connected");
}

export { app, auth, storage, ref, uploadBytesResumable, getDownloadURL, updateProfile };