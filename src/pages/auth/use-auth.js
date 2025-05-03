import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { create } from "zustand";
import { auth } from "../../firebase.config";

const useAuth = create((set) => {
  const observeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      user ? set({ userLooged: user }) : set({ userLooged: null });
    });
  };
  observeAuthState();

  return {
    userLooged: null,

    loginGoogleWithPopup: async () => {
      try {
        return await signInWithPopup(auth, new GoogleAuthProvider());
      } catch (error) {
        console.error(error);
      }
    },

    loginWithEmail: async (email, password) => {
      try {
        return await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error("Error al iniciar sesión con correo:", error);
        throw error;
      }
    },

    registerWithEmail: async (email, password) => {
      try {
        return await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error("Error al registrar:", error);
        throw error;
      }
    },

    logout: async () => {
      signOut(auth)
        .then(() => set({ userLooged: null }))
        .catch((error) => console.error(error));
    },
  };
});

export default useAuth;
